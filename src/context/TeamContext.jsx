import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import initialMembers from "../data/team";
import { useApp } from "./AppContext";

export const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const {
    addNotification,
    addActivity,
  } = useApp();

  const [members, setMembers] = useState(() => {
    const savedMembers =
      localStorage.getItem("teamMembers");

    return savedMembers
      ? JSON.parse(savedMembers)
      : initialMembers;
  });

  useEffect(() => {
    localStorage.setItem(
      "teamMembers",
      JSON.stringify(members)
    );
  }, [members]);
    const addMember = (member) => {
    setMembers((prev) => [...prev, member]);

    addNotification({
      title: "New Team Member",
      message: `${member.name} joined the team.`,
      time: "Just now",
    });

    addActivity({
      title: `${member.name} joined the team`,
    });
  };

  const deleteMember = (id) => {
    const member = members.find(
      (item) => item.id === id
    );

    setMembers((prev) =>
      prev.filter(
        (member) => member.id !== id
      )
    );

    if (member) {
      addNotification({
        title: "Team Member Removed",
        message: `${member.name} has been removed.`,
        time: "Just now",
      });

      addActivity({
        title: `${member.name} removed from team`,
      });
    }
  };

  const updateMember = (updatedMember) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === updatedMember.id
          ? updatedMember
          : member
      )
    );

    addNotification({
      title: "Team Member Updated",
      message: `${updatedMember.name}'s profile has been updated.`,
      time: "Just now",
    });

    addActivity({
      title: `${updatedMember.name}'s profile updated`,
    });
  };
    return (
    <TeamContext.Provider
      value={{
        members,
        addMember,
        deleteMember,
        updateMember,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);

export default TeamProvider;
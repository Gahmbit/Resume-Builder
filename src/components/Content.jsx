// import React from "react";
import LiveResume from "./LiveResume";
import UserInputs from "./UserInputs";
import { useUser, useSummary, useExperience } from "./StateManager";

export const Content = () => {
  const { user, setContactInfo } = useUser();
  const { summary, setNewSummary } = useSummary();
  const { experience1, experience2, setWorkExperience } = useExperience();

  return (
    <div className="content">
      <UserInputs
        setContactInfo={setContactInfo}
        setNewSummary={setNewSummary}
        setWorkExperience={setWorkExperience}
      />
      <LiveResume
        user={user}
        summary={summary}
        experience1={experience1}
        experience2={experience2}
      />
    </div>
  );
};

// import React from "react";
import LiveResume from "./LiveResume";
import UserInputs from "./UserInputs";
import {
  useUser,
  useSummary,
  useExperience,
  useEducation,
  useProjects,
  useSkills,
} from "./StateManager";
// import jsPDF from "jspdf";

export const Content = () => {
  const { user, setContactInfo } = useUser();
  const { summary, setNewSummary } = useSummary();
  const { experience1, experience2, setWorkExperience1, setWorkExperience2 } =
    useExperience();
  const { education, setMyEducation } = useEducation();
  const { projects, setMyProjects } = useProjects();
  const { skills, setMySkills } = useSkills();

  // const generateResume = () => {
  //   const resume = new jsPDF("portrait", "mm", "a4");
  //   resume.html(document.querySelector(".liveResume")).then(() => {
  //     resume.save(`${user.fullName}-Resume.pdf`);
  //   });
  // };

  return (
    <div className="content">
      <UserInputs
        setContactInfo={setContactInfo}
        setNewSummary={setNewSummary}
        setWorkExperience1={setWorkExperience1}
        setWorkExperience2={setWorkExperience2}
        setMyEducation={setMyEducation}
        setMyProjects={setMyProjects}
        setMySkills={setMySkills}
        // generateResume={generateResume}
      />
      <LiveResume
        user={user}
        summary={summary}
        experience1={experience1}
        experience2={experience2}
        education={education}
        projects={projects}
        skills={skills}
      />
    </div>
  );
};

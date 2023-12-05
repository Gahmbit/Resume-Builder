// import React from 'react'

import {
  defaultUser,
  defaultSummary,
  defaultJob1,
  defaultJob2,
  defaultEducation,
  defaultProjects,
  defaultSkills,
} from "./StateManager";

const UserInputs = (props) => {
  const setContactInfo = props.setContactInfo;
  const setNewSummary = props.setNewSummary;
  const setWorkExperience1 = props.setWorkExperience1;
  const setWorkExperience2 = props.setWorkExperience2;
  const setMyEducation = props.setMyEducation;
  const setMyProjects = props.setMyProjects;
  const setMySkills = props.setMySkills;
  // const generateResume = props.generateResume;

  const resetDefaults = () => {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      input.value = "";
    }
    setContactInfo({ ...defaultUser });
    setNewSummary({ ...defaultSummary });
    setWorkExperience1({ ...defaultJob1 });
    setWorkExperience2({ ...defaultJob2 });
    setMyEducation({ ...defaultEducation });
    setMyProjects({ ...defaultProjects });
    setMySkills({ ...defaultSkills });
    console.log("Reset all fields to defaults :)");
  };

  return (
    <div className="userInputs">
      <button
        onClick={() => {
          resetDefaults();
        }}
      >
        Reset All
      </button>
      <div id="contactInput">
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={(e) => {
            return e.target.value === ""
              ? setContactInfo({ ...defaultUser })
              : setContactInfo({ fullName: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={(e) => {
            return e.target.value === ""
              ? setContactInfo({ ...defaultUser })
              : setContactInfo({ location: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          onChange={(e) => {
            return e.target.value === ""
              ? setContactInfo({ ...defaultUser })
              : setContactInfo({ phone: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Email Address"
          name="phone"
          onChange={(e) => {
            return e.target.value === ""
              ? setContactInfo({ ...defaultUser })
              : setContactInfo({ email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Website"
          name="website"
          onChange={(e) => {
            return e.target.value === ""
              ? setContactInfo({ ...defaultUser })
              : setContactInfo({ website: e.target.value });
          }}
        />
      </div>
      {/* <button
        onClick={() => {
          generateResume();
        }}
      >
        Save Resume
      </button> */}
    </div>
  );
};

export default UserInputs;

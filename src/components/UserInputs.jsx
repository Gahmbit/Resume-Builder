// import React from 'react'

import {
  defaultUser,
  defaultSummary,
  defaultJob1,
  defaultJob2,
} from "./StateManager";

const UserInputs = (props) => {
  const setContactInfo = props.setContactInfo;
  const setNewSummary = props.setNewSummary;
  const setWorkExperience = props.setWorkExperience;

  const resetDefaults = () => {
    setContactInfo({ ...defaultUser });
    setNewSummary({ ...defaultSummary });
    setWorkExperience({ ...defaultJob1, ...defaultJob2 });
    console.log("Reset all fields to defaults :)");
  };

  return (
    <div className="userInputs">
      <button
        onClick={() => {
          resetDefaults();
          const inputs = document.querySelectorAll("input");
          for (const input of inputs) {
            //ADD CONDITIONAL TYPE CATCHING
            if (input.type === "text") {
              input.value = "";
            }
          }
        }}
      >
        Reset All
      </button>
      <input
        type="text"
        name="fullName"
        onChange={(e) => {
          setContactInfo({ fullName: e.target.value });
        }}
      />
    </div>
  );
};

export default UserInputs;

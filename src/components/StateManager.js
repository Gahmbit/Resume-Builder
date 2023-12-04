// import React from "react";
import { useState } from "react";

//DEFAULT DATA FOR RESUME
export const defaultUser = {
  fullName: "John Doe",
  location: "Toronto, ON",
  phone: "416-123-4567",
  email: "jdoe@mail.dev",
  website: "jdoe.dev",
};

export const defaultSummary = {
  heading: "Summary",
  para: "Detail-oriented Technical Writer with 7+ years of experience in writing end-user documentation, specializing in user help guides. Excellent writing, analytical thinking, research, and time management skills. Rewrote over 80% of user help guides for 30+ products at Company X, resulting in a 42% decrease in product-related customer support calls.",
};

export const defaultJob1 = {
  title: "CEO",
  company: "Business, Inc.",
  startMonth: "October",
  startYear: 2007,
  endMonth: "July",
  endYear: 2023,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const defaultJob2 = {
  title: "Founder",
  company: "The Company",
  startMonth: "December",
  startYear: 1999,
  endMonth: "October",
  endYear: 2007,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const useUser = () => {
  const [user, setUser] = useState({ ...defaultUser });

  const setContactInfo = (obj) => {
    setUser({ ...user, ...obj });
  };

  return {
    user,
    setContactInfo,
  };
};

export const useSummary = () => {
  const [summary, setSummary] = useState({ ...defaultSummary });
  const setNewSummary = (obj) => {
    setSummary({ ...summary, ...obj });
  };
  return {
    setNewSummary,
    summary,
  };
};

export const useExperience = () => {
  const [experience1, setExperience1] = useState({ ...defaultJob1 });
  const [experience2, setExperience2] = useState({ ...defaultJob2 });
  const setWorkExperience = (obj1, obj2) => {
    setExperience1({ ...experience1, ...obj1 });
    setExperience2({ ...experience2, ...obj2 });
  };
  return {
    setWorkExperience,
    experience1,
    experience2,
  };
};

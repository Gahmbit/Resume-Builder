// import React from "react";

function LiveResume({ user, summary, experience1, experience2 }) {
  const { fullName, location, phone, email, website } = user;
  const { para, heading } = summary;

  return (
    <div className="liveResume">
      <div id="who">
        <div id="fullName">{fullName}</div>
        <div id="contactInfo">
          <p>{location}</p>
          <p>|</p>
          <p>{phone}</p>
          <p>|</p>
          <p>{email}</p>
          <p>|</p>
          <p>{website}</p>
        </div>
      </div>
      <div id="summary">
        <h1>{heading}</h1>
        <div className="divider"></div>
        <p>{para}</p>
      </div>
      <div id="experience">
        <h1>Experience</h1>
        <div className="divider"></div>
        <div id="exp1">
          <h2>{experience1.title}</h2>
          <h3>{experience1.company}</h3>
          <h4>
            {experience1.startMonth} {experience1.startYear} -{" "}
            {experience1.endMonth} {experience1.endYear}
          </h4>
          <p>{experience1.desc}</p>
        </div>
        <div id="exp2">
          <h2>{experience2.title}</h2>
          <h3>{experience2.company}</h3>
          <h4>
            {experience2.startMonth} {experience2.startYear} -{" "}
            {experience2.endMonth} {experience2.endYear}
          </h4>
          <p>{experience2.desc}</p>
        </div>
        {/* NEED TO ADD STATES TO BELOW */}
      </div>
      <div id="education">
        <h1>Education</h1>
        <div className="divider"></div>
        <h2>Bachelor's Degree in Knowledge</h2>
        <h3>University of School - May 1999</h3>
        <h4>Graduated with Honours, 4.1 GPA</h4>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div className="divider"></div>
        <p>none lol</p>
      </div>
    </div>
  );
}

export default LiveResume;

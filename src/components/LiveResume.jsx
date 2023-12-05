// import React from "react";

function LiveResume({
  user,
  summary,
  experience1,
  experience2,
  education,
  projects,
  skills,
}) {
  const { fullName, location, phone, email, website } = user;
  const { para, heading } = summary;
  const { degree, school, notes } = education;
  const { p1name, p1info, p2name, p2info } = projects;
  const userSkills = Object.values(skills);

  const skillMap = userSkills.map((skill) => {
    return skill && <li key={skill}>{skill}</li>;
  });

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
      </div>
      <div id="education">
        <h1>Education</h1>
        <div className="divider"></div>
        <h2>{degree}</h2>
        <h3>{school}</h3>
        <h4>{notes}</h4>
      </div>
      <div id="projects">
        <h1>Projects</h1>
        <div className="divider"></div>
        <div id="proj1">
          <h2>{p1name}</h2>
          <p>{p1info}</p>
        </div>
        <div id="proj2">
          <h2>{p2name}</h2>
          <p>{p2info}</p>
        </div>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div className="divider"></div>
        <ul id="skillsList">{skillMap}</ul>
      </div>
    </div>
  );
}

export default LiveResume;

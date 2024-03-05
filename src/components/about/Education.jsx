import React from "react";

const educationContent = [
  {
    year: "OCT 2023 - FEB 2024",
    degree: "Software Engineer Bootcamp",
    institute: "App Academy",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
    //     adipisicing elit`,
  },
  {
    year: "2012",
    degree: "ASSOCIATES DEGREE",
    institute: "LaGuardia Community College",
    // details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
    //     elit, tempor incididunt`,
  },
  // {
  //   year: "2009",
  //   degree: "BACHELOR DEGREE ",
  //   institute: "TUNIS HIGH SCHOOL",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
          </h5>
          <h5>
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;

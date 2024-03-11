import React from "react";

const experienceContent = [
  {
    year: "   2023 - Present",
    position: " Health Aid",
    compnayName: "Marks Home Care",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
    //     adipisicing elit`,
  },
  {
    year: "2011 - 2023",
    position: "Sales Associate",
    compnayName: "Nike",
    // details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
    //     elit, tempor incididunt`,
  },
  {
    year: "2019 - 2011",
    position: "Administrative Assistant",
    compnayName: "Rock Realty",
    // details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
    //     elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

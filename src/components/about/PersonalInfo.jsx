import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Mujahed" },
  { meta: "last name", metaInfo: "Ali" },
  { meta: "Age", metaInfo: "27 Years" },
  // { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "Tunis" },
  // { meta: "phone", metaInfo: "+16462402573" },
  { meta: "Email", metaInfo: "mujahed97@gmail.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  // { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

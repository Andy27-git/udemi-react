import React from "react";

// const Person = ({guid, name, email, phone, company}) => {
//     console.log(guid, name, email, phone, company);
const Person = (props) => {
  const { name, email, phone, company } = props;
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <h4>{company}</h4>
    </div>
  );
};

export default Person;

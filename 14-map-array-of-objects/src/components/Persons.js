import React from "react";
import persons from "./data/persons"
import Person from "./Person";

const Persons = () => {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person key={Math.random()} {...person} />;
      })}
    </div>
  );
};

export default Persons;

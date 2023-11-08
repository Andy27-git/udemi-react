import React from 'react';

const PetInfo = ({animal, age}) => {
    console.log({animal, age});
    return  <h1>My {animal} is {age} years old</h1>;
};

export default PetInfo;
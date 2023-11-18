import React from "react";
import "./Info.css";
import styles from './info.module.css'

console.log(styles);

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOftherButton}>Button with local CSS styles</button>
    </div>
  );
};

export default Info;

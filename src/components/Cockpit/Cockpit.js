import React from "react";

import styles from "./Cockpit.module.css";

const cockpit = props => {
  let classes = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }

  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button onClick={props.clicked} className={btnClass}>
        Switch name
      </button>
    </div>
  );
};

export default cockpit;

import classes from "./SectionItem.module.css";
import React from "react";

const SectionItem = ({ section, active, onClick}) => {
  return (

    <li
      style={{ backgroundImage: `url(${section.backgroundImage})` }}
      role="button"
      className={active ? classes.active : ""}
      onClick={onClick}
    >

      <h3>{section.name}</h3>

      {active && (

        <div className={`${classes["section-content"]} test-class`}>
          <div className={classes["inner"]}>
            <div className={classes["summary"]}>
              <h2>{section.name}</h2>
              <p>{section.description}</p>


            </div>
          </div>
        </div>

      )}
      </li>

  );
};

export default SectionItem;

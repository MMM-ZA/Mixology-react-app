import classes from "./SectionItem.module.css";
import React, { useReducer } from "react";
import ActiveDrinks from "../Drinks/ActiveDrinks";

const reducer = (filteredDrinks, drink, section) => {
  if (drink.sectionId === section.id) {
    filteredDrinks.push(drink);
  }
  return filteredDrinks;
};

const SectionItem = ({ section, active, onClick, drinks }) => {
  const [activeDrinks, dispatch] = useReducer(reducer, []);

  if (Array.isArray(drinks)) {
    drinks.forEach(drink => {
      dispatch(drink);
    });
  }

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
              <ActiveDrinks drinks={activeDrinks} />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default SectionItem;

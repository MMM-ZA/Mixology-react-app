import { useState } from "react";
import ActiveDrinks from "../Drinks/ActiveDrinks";
import classes from "./SectionItem.module.css";

const SectionItem = (props) => {
 const { section } = props;

 const [sections, setSections] = useState(props.section);
 const [drinks, setDrinks] = useState(props.drinkList);

 const updateSectionsAndDrinks = (newSections, newDrinks) => {
  const filteredDrinks = newDrinks.filter(drink => {
    const section = newSections.find(section => section.id === drink.sectionId);
    return section && section.id === drink.sectionId;
   });
   setSections(newSections);
   setDrinks(filteredDrinks);
};

  return (
    <li
      style={{ backgroundImage: `url(${props.section.backgroundImage})` }}
      role="button"
      className={props.active ? classes.active : ""}
      onClick={props.onClick}
    >
      <h3>{props.section.name}</h3>
      {props.active && (
        <div className={`${classes["section-content"]} test-class`}>
          <div className={classes["inner"]}>
            <div className={classes["summary"]}>
              <h2>{props.section.name}</h2>
              <p>{props.section.description}</p>
              <ActiveDrinks
               updateSectionsAndDrinks={updateSectionsAndDrinks}
                drinks={drinks}
                displayActiveDrinks={sections}
                sectionId={section.id}
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default SectionItem;

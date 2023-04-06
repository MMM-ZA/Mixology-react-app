import classes from "./SectionItem.module.css";
import ActiveDrinks from "../Drinks/ActiveDrinks";



const SectionItem = (props) => {


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
              <ActiveDrinks/>
              <ul>
      </ul>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default SectionItem;

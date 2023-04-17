import classes from './DrinkItem.module.css';

const DrinkItem = props => {
  return (
    <li className={classes.menuList}>
    <div>
        <div key={props.id}>
          <h4>{props.name}</h4>
          <p>Price: ${props.price.toFixed(2)}</p>
        </div>

    </div>
    </li>
  );

};

export default DrinkItem

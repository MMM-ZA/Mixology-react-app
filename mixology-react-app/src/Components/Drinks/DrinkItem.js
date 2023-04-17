import classes from './DrinkItem.module.css';
import DrinkItemForm from './DrinkItemForm';

const DrinkItem = props => {
  const price = `$${props.price.toFixed(2)}`;

  return (

     <div className={classes.container}>
         <div key={props.id}>
           <h4>{props.name}</h4>
           <p>{price}</p>
         </div>
         <div>
         <DrinkItemForm/>
      </div>
    </div>

  );

};

export default DrinkItem

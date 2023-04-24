import { useContext } from 'react';
import classes from './DrinkItem.module.css';
import DrinkItemForm from './DrinkItemForm';
import CartContext from '../../Store/Cart-Context';

const DrinkItem = props => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });

  };

  return (

     <div className={classes.container}>
         <div key={props.id}>
           <h4>{props.name}</h4>
           <p>{price}</p>
         </div>
         <div>
         <DrinkItemForm onAddToCart={addToCartHandler}/>
      </div>
    </div>

  );

};

export default DrinkItem

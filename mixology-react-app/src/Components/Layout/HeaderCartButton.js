import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/Cart-Context';


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);


  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;

  },0);

  // const btnClasses = `${classes.button} ${classes.bump}`

  return (
    <button className={classes.buttonCart} onClick={props.onClick}>
      <span className={classes.icon} >
        <CartIcon/>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>

    </button>
  );


};

 export default HeaderCartButton;

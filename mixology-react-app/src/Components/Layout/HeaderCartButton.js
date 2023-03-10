import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton';


const HeaderCartButton = props => {

  return (
    <button className={classes.buttonCart}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>

    </button>
  )


};

 export default HeaderCartButton

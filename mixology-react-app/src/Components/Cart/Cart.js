import Modal from '../UI/Modal';
import classes from './Cart.module.css';


const Cart = props => {

  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'd1',
    sectionId: 's1',
    amount: 2,
    name: 'Gin and Tonic',
    price: 16.99}].map((item) => (
      <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
       {cartItems }
       <div>
       <span>Total Amount</span>
       <span>24.89</span>
       </div>
        <div className={classes.actions}>
         <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
         <button className={classes.button}>Order</button>
       </div>
    </Modal>
  )

};

export default Cart;

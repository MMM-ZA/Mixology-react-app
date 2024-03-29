import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';



const Header = (props) => {
  return (
   <Fragment>
     <header className={classes.header}>
      <div className={classes.wrapper}>
      <h1>Mixology</h1>
     </div>
     <HeaderCartButton onClick={props.onShowCart}/>

     </header>
   </Fragment>
  );

};

export default Header;

import { Fragment } from 'react';
import classes from './Header.module.css';
import cocktail from './cocktail.png';

const Header = () => {
  return (
   <Fragment>
     <header className={classes.header}>
     <img src={cocktail} alt="martini glass" width="100" height="50" />
     <h1>Mixology</h1>


     </header>
   </Fragment>
  );

};

export default Header;

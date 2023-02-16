import { Fragment } from 'react';
import classes from './Header.module.css';
import cocktail from '../../Assets/cocktail.png';


const Header = () => {
  return (
   <Fragment>
     <header className={classes.header}>
    <div className={classes.spacing}>
     <img src={cocktail} alt="martini glass" width="100" height="80" />
     <h1>Mixology</h1>
    </div>

     </header>
   </Fragment>
  );

};

export default Header;

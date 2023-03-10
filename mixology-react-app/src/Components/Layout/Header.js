import { Fragment } from 'react';
import classes from './Header.module.css';



const Header = () => {
  return (
   <Fragment>
     <header className={classes.header}>
    <div className={classes.wrapper}>
     <h1>Mixology</h1>
    </div>

     </header>
   </Fragment>
  );

};

export default Header;

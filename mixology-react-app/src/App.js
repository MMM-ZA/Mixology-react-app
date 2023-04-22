import { Fragment } from 'react';
import { useState } from 'react';
import Header from './Components/Layout/Header';
import './App.css';
import SectionContents from './Components/Layout/SectionContents';
import Cart from './Components/Cart/Cart';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
   setCartIsShown(true)
  };

  const hideCartHandler = () => {
   setCartIsShown(false)
  };


  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
     <SectionContents/>
     </main>
    </Fragment>
  );
}

export default App;

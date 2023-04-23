import { useState } from 'react';
import Header from './Components/Layout/Header';
import './App.css';
import SectionContents from './Components/Layout/SectionContents';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
   setCartIsShown(true)
  };

  const hideCartHandler = () => {
   setCartIsShown(false)
  };


  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
     <SectionContents/>
     </main>
    </CartProvider>
  );
}

export default App;

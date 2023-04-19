import Header from './Components/Layout/Header';
import './App.css';
import SectionContents from './Components/Layout/SectionContents';
import Cart from './Components/Cart/Cart';
import { Fragment } from 'react';

function App() {


  return (
    <Fragment>
     <Header/>
     <main>
     <SectionContents/>
     <Cart/>
     </main>
    </Fragment>
  );
}

export default App;

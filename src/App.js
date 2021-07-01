import './App.css';
import Header from './Components/Layout/Header/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
// import Context from './store/Context';
import { useState } from 'react';
import ContextProvider from './store/ContextProvider';

function App() {
  const [showCart,setShowCart]=useState(false);

  const openCartHandler = ()=>{
    setShowCart(true);
  }
  const closeCartHandler= ()=>{
    setShowCart(false)
  }

  return (
    <ContextProvider>

      {showCart && <Cart onClick={closeCartHandler}/>}
      <Header onClick={openCartHandler}/>
      <main>
        <Meals/>
      </main>

    </ContextProvider>
  );
}

export default App;

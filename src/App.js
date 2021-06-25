import { useState } from 'react';
import './App.css';
import CartDatas from './CartStore/CartDatas';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals.js'

function App() {

  const [cartIsShown,setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  console.log(setCartIsShown,'setCartIsShown');
  return (
    <CartDatas>   
     {cartIsShown && <Cart onCloseBtn = {hideCartHandler}/>}
       <Header onCartButton = {showCartHandler}/>
       <main>
         <Meals/>
       </main>
    </CartDatas>

  );
}

export default App;

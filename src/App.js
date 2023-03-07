import './App.css';
import React, { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";
import fruit from './fruit.jpg'

const App = () => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <>
    {showPayment ? 
      <div className="App">
        <StripeContainer />
      </div>
      :
      <div className='big-container'>
        <h2>FRUIT SHOP</h2>
        <div className='container'>
          <img src={ fruit } alt="Fruit" />
          <div className='small-container'>
            <p>Price: $9.99</p>
            <button onClick={ () => setShowPayment(true) }>Buy</button>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default App;
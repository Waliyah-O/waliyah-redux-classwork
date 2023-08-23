import React from "react";
import { dummyData } from "./assets/dummyData";
import { useSelector } from "react-redux";
import ChangeTextButton from "./components/CustomButton"; 
import CardComponent from "./components/CardComponent";
import { getCartItemCount } from "./redux/slices/addToCartSlice"; 

const App = () => {
  const displayedPrice = useSelector((state) => state.product.displayedPrice);
  const cartItemCount = useSelector(getCartItemCount)

  return (
    <div>
      <div >
        <ChangeTextButton buttonText="NGN" />
        <ChangeTextButton buttonText="USD" />
      </div>
      <p>Total items in cart: {cartItemCount}</p>
      <div>
        {dummyData.map((product, index) => (
          <CardComponent key={index} product={product} displayedPrice={displayedPrice} />
        ))}
      </div>
    </div>
  );
};

export default App;

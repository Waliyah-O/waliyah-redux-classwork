import React from "react";
import { dummyData } from "./assets/dummyData";
import { useSelector } from "react-redux";
import ChangeTextButton from "./components/CustomButton";
import CardComponent from "./components/CardComponent";
import { getCartItemCount } from "./redux/slices/addToCartSlice";

const App = () => {
  const displayedPrice = useSelector((state) => state.product.displayedPrice);
  const cartItemCount = useSelector(getCartItemCount);

  return (
    <div
      style={{ display: "flex", width: "100vw", height: "80vh", gap: "2em" }}
    >
      <div style={{ display: "flex", gap: "2em" }}>
        {dummyData.map((product, index) => (
          <CardComponent
            key={index}
            product={product}
            displayedPrice={displayedPrice}
          />
        ))}
      </div>
      <div>
        <ChangeTextButton buttonText="NGN" />
        <ChangeTextButton buttonText="USD" />
        <p>Total items in cart: {cartItemCount}</p>
      </div>
    </div>
  );
};

export default App;

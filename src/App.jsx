import React from "react";
import { dummyData } from "./assets/dummyData";
import { useSelector } from "react-redux";
import ChangeTextButton from "./components/CustomButton"; // Import the updated component
import CardComponent from "./components/CardComponent";

const App = () => {
  const displayedPrice = useSelector((state) => state.product.displayedPrice);

  return (
    <div className="app">
      <h1>E-commerce Store</h1>
      <div className="price-buttons">
        <ChangeTextButton buttonText="Naira Price" />
        <ChangeTextButton buttonText="Dollar Price" />
      </div>
      <div className="product-container">
        {dummyData.map((product, index) => (
          <CardComponent key={index} product={product} displayedPrice={displayedPrice} />
        ))}
      </div>
    </div>
  );
};

export default App;

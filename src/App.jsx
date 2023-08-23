import React from "react";
import CardComponent from "./components/CardComponent";
import { dummyData } from "./assets/dummyData";
import { useSelector } from "react-redux";

const App = () => {
  const displayedPrice = useSelector((state) => state.product.displayedPrice);

  return (
    <div className="app">
      <h1>E-commerce Store</h1>
      <div className="product-container">
        {dummyData.map((product, index) => (
          <CardComponent key={index} product={product} displayedPrice={displayedPrice} />
        ))}
      </div>
    </div>
  );
};

export default App;

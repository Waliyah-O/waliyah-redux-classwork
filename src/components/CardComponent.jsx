// src/components/ProductCard.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplayedPrice } from "../redux/slices/productSlice";

const CardComponent = ({ product }) => {
  const dispatch = useDispatch();

  const displayedPrice = useSelector((state) => state.product.displayedPrice);

  // const handleTogglePrice = () => {
  //   dispatch(toggleDisplayedPrice());
  // };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product[displayedPrice]}</p>
      {/* <button onClick={handleTogglePrice}>Toggle Price</button> */}
    </div>
  );
};

export default CardComponent;

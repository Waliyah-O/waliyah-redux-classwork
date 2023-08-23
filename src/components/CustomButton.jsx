
import React from "react";
import { useDispatch } from "react-redux";
import { toggleDisplayedPrice } from "../redux/slices/productSlice";

const ChangeTextButton = ({ buttonText }) => {
  const dispatch = useDispatch();

  const handleTogglePrice = () => {
    dispatch(toggleDisplayedPrice());
  };

  return (
    <div>
      <button onClick={handleTogglePrice}>{buttonText}</button>
    </div>
  );
};

export default ChangeTextButton;

import { useDispatch, useSelector } from "react-redux";

import { changePrice } from "../redux/slices/priceSlice";

const ChangeTextButton = ({ buttonText }) => {
  const dispatch = useDispatch();

  const textToChange = useSelector((state) => state.product.text);

  const handlePriceChange = (changedText) => {
    dispatch(changePrice(changedText))
  };

  return (
    <div>
      <button onClick={() => handlePriceChange('naira')}>{buttonText}</button>
    </div>
  );
};

export default ChangeTextButton;

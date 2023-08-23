import { addToCart } from "../redux/slices/cartSlice";
import { container, wrapper, images } from "./ComponentStyles";
import { useDispatch, useSelector } from "react-redux";

const CardComponent = ({ items }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.text);

  const handleAddToCart = (price) => {
    dispatch(addToCart(price));
    // console.log("add to cart");
  };
  return (
    <div style={container}>
      <div style={wrapper}>
        <img style={images} src={items.image} alt="" />
      </div>
      <h3>{items.name}</h3>
      <h3>{items.dollarPrice}</h3>
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
};

export default CardComponent;

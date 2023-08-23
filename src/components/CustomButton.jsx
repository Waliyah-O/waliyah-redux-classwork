
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrency } from '../redux/slices/textSlice';

const ChangeTextButton = () => {
  const dispatch = useDispatch();

  const handleChangeText = () => {
    dispatch(changeCurrency('New Text from Button'));
  };

  return (
    <div>
      <button onClick={handleChangeText}>Change Text</button>
    </div>
  );
};

export default ChangeTextButton;

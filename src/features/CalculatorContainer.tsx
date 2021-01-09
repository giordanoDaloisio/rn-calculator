import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorSelector } from '../app/selectors';
import { Operator } from '../model/operator';
import {
  calculateResult,
  resetState,
  setNumber,
  setOperator,
} from './calculatorSlice';
import CalculatorView from './CalculatorView';

export default function CalculatorContainer() {
  const [displayNum, setDisplayNum] = useState('0');
  const [isNew, setIsNew] = useState(false);
  const dispatch = useDispatch();
  const { secondNum, result, error } = useSelector(calculatorSelector);

  const handleOperator = (op: Operator): void => {
    if (secondNum) {
      dispatch(calculateResult());
    }
    dispatch(setOperator(op));
    setIsNew(true);
  };

  const handleNumber = (num: number): void => {
    if (displayNum !== '0' && !isNew) {
      setDisplayNum(displayNum + num.toString());
      dispatch(setNumber(parseFloat(displayNum + num.toString())));
    } else {
      setDisplayNum(num.toString());
      dispatch(setNumber(num));
    }
    setIsNew(false);
  };

  const cancelAllHandler = () => {
    setDisplayNum('0');
    dispatch(resetState());
  };

  const calcelHandler = () => {
    setDisplayNum('0');
  };

  const handleEqual = () => {
    dispatch(calculateResult());
    dispatch(setOperator(null));
    setIsNew(true);
  };

  useEffect(() => {
    if (result) {
      setDisplayNum(result.toString());
    }
    if (error) {
      setDisplayNum(error);
    }
  }, [result, error]);

  return (
    <CalculatorView
      displayNum={displayNum}
      cancelAllHandler={cancelAllHandler}
      cancelHandler={calcelHandler}
      handleEqual={handleEqual}
      handleNumber={handleNumber}
      handleOperator={handleOperator}
    />
  );
}

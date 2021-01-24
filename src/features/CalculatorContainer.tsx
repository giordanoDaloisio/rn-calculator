import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorSelector } from '../app/selectors';
import { Operator } from '../model/operator';
import { DISPLAY_FONT_SIZE } from '../theme';
import {
  calculateResult,
  resetState,
  setNumber,
  setOperator,
} from './calculatorSlice';
import CalculatorView from './CalculatorView';

export default function CalculatorContainer() {
  const [displayNum, setDisplayNum] = useState('0');
  const [fontSize, setFontSize] = useState(DISPLAY_FONT_SIZE);
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
      if (displayNum.length < 9) {
        const newNum = displayNum + num.toString();
        // reduce font size if the number is high
        if (newNum.length >= 6) {
          setFontSize(fontSize - 2);
        } else {
          setFontSize(DISPLAY_FONT_SIZE);
        }
        setDisplayNum(newNum);
        dispatch(setNumber(parseFloat(newNum)));
      }
    } else {
      setDisplayNum(num.toString());
      dispatch(setNumber(num));
    }
    setIsNew(false);
  };

  const cancelAllHandler = () => {
    setFontSize(DISPLAY_FONT_SIZE);
    setDisplayNum('0');
    dispatch(resetState());
  };

  const calcelHandler = () => {
    setFontSize(DISPLAY_FONT_SIZE);
    setDisplayNum('0');
  };

  const handleEqual = () => {
    dispatch(calculateResult());
    dispatch(setOperator(null));
    setIsNew(true);
  };

  const changeSignHandler = () => {
    const num = parseFloat(displayNum) * -1;
    setDisplayNum(num.toString());
    dispatch(setNumber(num));
  };

  const handleComma = () => {
    if (!displayNum.includes(',')) {
      setDisplayNum(displayNum + '.');
    }
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
      changeSignHandler={changeSignHandler}
      handleComma={handleComma}
      fontSize={fontSize}
    />
  );
}

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import CalculatorButton from '../components/CalculatorButton';
import { FONTSIZE, MARGIN } from '../theme';
import { RootType } from '../app/store';
import {
  calculateResult,
  resetState,
  setFirstNum,
  setOperator,
  setSecondNum,
  setNumber,
} from '../features/calculatorSlice';
import { Operator } from '../model/operator';

export default function Main() {
  const [displayNum, setDisplayNum] = useState('0');
  const [isNew, setIsNew] = useState(false);
  const dispatch = useDispatch();
  const { operator, secondNum, result } = useSelector(
    (state: RootType) => state.calculator,
  );

  const createButtonRange = (min: number, max: number): Array<JSX.Element> => {
    const buttons: Array<JSX.Element> = [];
    for (let index = min; index <= max; index++) {
      buttons.push(
        <CalculatorButton
          value={index.toString()}
          onClick={() => {
            handleNumber(index);
          }}
          key={index}
        />,
      );
    }
    return buttons;
  };

  const handleOperator = (op: Operator): void => {
    dispatch(setOperator(op));
    setIsNew(true);
    // check if is a nested operation
    if (secondNum) {
      // if it is calculate the first result and reset the second number
      dispatch(calculateResult());
      // TODO display result
    }
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

  return (
    <View style={styles.container}>
      <Text style={styles.displayNumStyle}>{displayNum}</Text>
      <View style={styles.row}>
        <CalculatorButton
          value="AC"
          onClick={() => {
            setDisplayNum('0');
            dispatch(resetState());
          }}
        />
        <CalculatorButton
          value="C"
          onClick={() => {
            setDisplayNum('0');
          }}
        />
        <CalculatorButton
          value="/"
          onClick={() => {
            displayNum !== '0'
              ? handleOperator(Operator.DIVIDE)
              : setDisplayNum('Errore');
          }}
        />
      </View>
      <View style={styles.row}>
        {createButtonRange(7, 9)}
        <CalculatorButton
          value="+"
          onClick={() => {
            handleOperator(Operator.PLUS);
          }}
        />
      </View>
      <View style={styles.row}>
        {createButtonRange(4, 6)}
        <CalculatorButton
          value="-"
          onClick={() => {
            handleOperator(Operator.MINUS);
          }}
        />
      </View>
      <View style={styles.row}>
        {createButtonRange(1, 3)}
        <CalculatorButton
          value="X"
          onClick={() => {
            handleOperator(Operator.FOR);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  displayNumStyle: {
    fontSize: FONTSIZE,
    margin: MARGIN,
  },
});

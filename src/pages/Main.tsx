import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorSelector } from '../app/selectors';
import CalculatorButton from '../components/CalculatorButton';
import {
  calculateResult,
  resetState,
  setNumber,
  setOperator,
} from '../features/calculatorSlice';
import { Operator } from '../model/operator';
import { FONTSIZE, MARGIN } from '../theme';

export default function Main() {
  const [displayNum, setDisplayNum] = useState('0');
  const [isNew, setIsNew] = useState(false);
  const dispatch = useDispatch();
  const { secondNum, result } = useSelector(calculatorSelector);

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

  useEffect(() => {
    if (result) {
      setDisplayNum(result.toString());
    }
  }, [result]);

  return (
    <SafeAreaView style={styles.container}>
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
            handleOperator(Operator.DIVIDE);
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
      <View style={styles.row}>
        {createButtonRange(0, 0)}
        <CalculatorButton
          value="="
          onClick={() => {
            dispatch(calculateResult());
            dispatch(setOperator(null));
            setIsNew(true);
          }}
        />
      </View>
    </SafeAreaView>
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

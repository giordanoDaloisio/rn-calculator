import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import { Operator } from '../model/operator';
import { FONTSIZE, MARGIN } from '../theme';

type Props = {
  displayNum: string;
  cancelAllHandler: () => void;
  cancelHandler: () => void;
  handleOperator: (op: Operator) => void;
  handleNumber: (number: number) => void;
  handleEqual: () => void;
  changeSignHandler: () => void;
  handleComma: () => void;
};

const CalculatorView: React.FC<Props> = ({
  displayNum,
  cancelAllHandler,
  cancelHandler,
  handleOperator,
  handleNumber,
  handleEqual,
  changeSignHandler,
  handleComma,
}) => {
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

  return (
    <>
      <Text style={styles.displayNumStyle}>{displayNum}</Text>
      <View style={styles.row}>
        <CalculatorButton value="AC" onClick={cancelAllHandler} />
        <CalculatorButton value="C" onClick={cancelHandler} />
        <CalculatorButton value="+/-" onClick={changeSignHandler} />
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
        <CalculatorButton value="," onClick={handleComma} />
        <CalculatorButton value="=" onClick={handleEqual} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  displayNumStyle: {
    fontSize: FONTSIZE,
    margin: MARGIN,
  },
});

export default CalculatorView;

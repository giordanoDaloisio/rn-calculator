import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorButton, { ButtonType } from '../components/CalculatorButton';
import CalculatorTextView from '../components/CalculatorTextView';
import { Operator } from '../model/operator';

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
          type={ButtonType.NUMBER}
        />,
      );
    }
    return buttons;
  };

  return (
    <>
      <CalculatorTextView displayNum={displayNum} />
      <View style={styles.row}>
        <CalculatorButton
          value="AC"
          onClick={cancelAllHandler}
          type={ButtonType.OTHER}
        />
        <CalculatorButton
          value="C"
          onClick={cancelHandler}
          type={ButtonType.OTHER}
        />
        <CalculatorButton
          value="+/-"
          onClick={changeSignHandler}
          type={ButtonType.OTHER}
        />
        <CalculatorButton
          value="/"
          onClick={() => {
            handleOperator(Operator.DIVIDE);
          }}
          type={ButtonType.OPERATION}
        />
      </View>
      <View style={styles.row}>
        {createButtonRange(7, 9)}
        <CalculatorButton
          value="+"
          onClick={() => {
            handleOperator(Operator.PLUS);
          }}
          type={ButtonType.OPERATION}
        />
      </View>
      <View style={styles.row}>
        {createButtonRange(4, 6)}
        <CalculatorButton
          value="-"
          onClick={() => {
            handleOperator(Operator.MINUS);
          }}
          type={ButtonType.OPERATION}
        />
      </View>
      <View style={styles.row}>
        {createButtonRange(1, 3)}
        <CalculatorButton
          value="X"
          onClick={() => {
            handleOperator(Operator.FOR);
          }}
          type={ButtonType.OPERATION}
        />
      </View>
      <View style={styles.row}>
        {createButtonRange(0, 0)}
        <CalculatorButton
          value=","
          onClick={handleComma}
          type={ButtonType.NUMBER}
        />
        <CalculatorButton
          value="="
          onClick={handleEqual}
          type={ButtonType.OPERATION}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CalculatorView;

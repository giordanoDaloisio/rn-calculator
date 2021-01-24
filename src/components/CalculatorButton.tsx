import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONTSIZE, FONT_COLOR, HEIGHT, MARGIN, WIDTH } from '../theme';

export enum ButtonType {
  NUMBER = 'number',
  OPERATION = 'operation',
  OTHER = 'other',
}

type ButtonProps = {
  value: string;
  onClick: () => void;
  type: ButtonType;
  doubleSize?: boolean;
};

const CalculatorButton: React.FC<ButtonProps> = ({
  value,
  onClick,
  type,
  doubleSize,
}) => {
  const buttonStyle = [styles.buttonStyle, styles[type]];
  doubleSize ? buttonStyle.push(styles.doubleSize) : buttonStyle;

  return (
    <TouchableOpacity onPress={onClick} style={buttonStyle}>
      <Text style={[styles.buttonText, styles[type + 'Font']]}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    margin: MARGIN,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: WIDTH,
    height: HEIGHT,
  },
  buttonText: {
    fontSize: FONTSIZE,
    fontWeight: '300',
    color: FONT_COLOR,
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  number: {
    backgroundColor: '#474747',
  },
  numberFont: {
    color: 'white',
  },
  operation: {
    backgroundColor: '#f39200',
  },
  operationFont: {
    color: 'white',
  },
  other: {
    backgroundColor: '#D6D6D6',
  },
  otherFont: {
    color: 'black',
  },
  doubleSize: {
    width: WIDTH * 2,
    alignItems: 'flex-start',
    borderColor: 'white',
    paddingLeft: 20,
  },
});

export default CalculatorButton;

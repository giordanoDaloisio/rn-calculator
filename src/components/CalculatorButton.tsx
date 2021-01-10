import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONTSIZE, FONT_COLOR, MARGIN } from '../theme';

export enum ButtonType {
  NUMBER = 'number',
  OPERATION = 'operation',
  OTHER = 'other',
}

type ButtonProps = {
  value: string;
  onClick: () => void;
  type?: ButtonType;
};

const CalculatorButton: React.FC<ButtonProps> = ({ value, onClick, type }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.buttonStyle, styles.number]}>
      <Text style={[styles.buttonText, styles.numberFont]}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    margin: MARGIN,
    alignContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: FONTSIZE,
    fontWeight: '300',
    color: FONT_COLOR,
    textAlign: 'center',
  },
  number: {
    backgroundColor: '#474747',
  },
  numberFont: {
    color: 'white',
  },
});

export default CalculatorButton;

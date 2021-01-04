import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONTSIZE, MARGIN } from '../theme';

export type ButtonProps = {
  value: String;
  onClick: () => void;
};

const CalculatorButton: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.buttonStyle}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    margin: MARGIN,
    alignContent: 'center',
  },
  buttonText: {
    fontSize: FONTSIZE,
    fontWeight: '300',
  },
});

export default CalculatorButton;

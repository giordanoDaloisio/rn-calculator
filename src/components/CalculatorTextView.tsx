import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONT_COLOR, MARGIN } from '../theme';

interface Props {
  displayNum: string;
}

const CalculatorTextView: React.FC<Props> = ({ displayNum }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.displayNumStyle}>{displayNum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  displayNumStyle: {
    fontSize: 60,
    margin: MARGIN + 10,
    color: FONT_COLOR,
  },
  container: {
    alignItems: 'flex-end',
  },
});

export default CalculatorTextView;

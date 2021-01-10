import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONTSIZE, MARGIN, FONT_COLOR } from '../theme';

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
    fontSize: FONTSIZE,
    margin: MARGIN,
    color: FONT_COLOR,
  },
  container: {
    alignItems: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'white',
  },
});

export default CalculatorTextView;

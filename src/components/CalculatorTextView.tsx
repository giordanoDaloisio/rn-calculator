import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FONT_COLOR, MARGIN } from '../theme';

interface Props {
  displayNum: string;
  fontSize: number;
}

const CalculatorTextView: React.FC<Props> = ({ displayNum, fontSize }) => {
  // const [fontSize, setFontSize] = useState(60);
  // useEffect(() => {
  //   if (displayNum.length > 6) {
  //     setFontSize(fontSize - 5);
  //   } else {
  //     setFontSize(60);
  //   }
  // }, [displayNum]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.displayNumStyle, { fontSize: fontSize }]}
        value={displayNum}
        editable={false}
        maxLength={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  displayNumStyle: {
    margin: MARGIN + 10,
    color: FONT_COLOR,
  },
  container: {
    alignItems: 'flex-end',
  },
});

export default CalculatorTextView;

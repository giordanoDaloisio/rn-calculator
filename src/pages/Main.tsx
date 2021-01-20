import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from '../features';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flex: 1,
  },
});

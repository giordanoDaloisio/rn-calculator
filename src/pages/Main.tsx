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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 10,
  },
});

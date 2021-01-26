import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './MainContainer';
import { colors } from './styles/settings'

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
    paddingLeft: 30,
    flex: 1,
    backgroundColor: colors.background,
  },
});

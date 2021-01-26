import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import { colors } from '../styles/settings'

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.navItem}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  navItem: {
    color: colors.primary,
    fontSize: 20
  }
});


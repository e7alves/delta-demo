import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from '../styles/settings'

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Students")}>
        <Text style={styles.menuItem}>Alunos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("NewStudent")}>
        <Text style={styles.menuItem}>Novo aluno</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItem: {
    backgroundColor: colors.primary,
    minWidth: 300,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textSecondary
  }
});

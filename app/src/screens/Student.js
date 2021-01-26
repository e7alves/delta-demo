import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'

import apiConfig from '../apiConfig'
import { colors } from '../styles/settings'

class Students extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      student: null,
    }
    this.retrieveStudent();
  }

  retrieveStudent = () => {
    const { id } = this.props.navigation.state.params
    axios.get(`${apiConfig.url}/students/${id}`)
      .then((response) => {
        this.setState({
          student: response.data,
        })
      })
      .catch(() => {
        console.log("Error on retrieve students")
      });
  }

  render() {
    const { student } = this.state
    if (!student) {
      return null
    }
    const { name, address, imageBase64 } = this.state.student
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: imageBase64 }}
        />
        <Text style={styles.info}>{name}</Text>
        <Text style={styles.info}>{address}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    fontSize: 20,
    color: colors.textPrimary,
    marginTop: 20
  },
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').width / 4,
  },
});

export default Students
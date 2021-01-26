import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

import { colors } from '../styles/settings'
import apiConfig from '../apiConfig'

class Students extends React.Component {
  constructor(props) {
    super(props)
    this.retrieveStudents();
    this.state = {
      students: [],
    }
  }

  retrieveStudents = () => {
    axios.get(`${apiConfig.url}/students`)
      .then((response) => {
        this.setState({
          students: response.data.list,
        })
      })
      .catch(() => {
        console.log("Error on retrieve students")
      });
  }

  render() {
    const { navigation } = this.props;
    const { students } = this.state;
    return (
      <View>
        {
          students.map(({ id, name, address }) => (
            <TouchableOpacity
              key={id}
              onPress={() => navigation.navigate("Student", { id })}
              style={styles.listItem}
            >
              <Text style={styles.primaryInfo}>{name}</Text>
              <Text style={styles.secondaryInfo}>{address}</Text>
            </TouchableOpacity>    
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  primaryInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  secondaryInfo: {
    fontSize: 16,
    color: colors.textGrayed,
  }
});

export default Students
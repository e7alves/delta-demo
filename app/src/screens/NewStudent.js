import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'
import { launchImageLibrary } from 'react-native-image-picker';

import apiConfig from '../apiConfig'
import { colors } from '../styles/settings'

class NewStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      imageBase64: null,
    }
  }

  saveStudent = () => {
    const { name, address, imageBase64 } = this.state
    const { navigation } = this.props
    console.log(imageBase64)
    axios.post(`${apiConfig.url}/students`, { name, address, imageBase64 })
      .then(() => {
        navigation.navigate("Students")
      })
      .catch(() => {
        console.log("Error on save student")
      });
  }

  pickImage = () => {
    launchImageLibrary({
      mediaType: 'photo',
      title: 'Escolha a imagem',
      takePhotoButtonTitle: 'Tirar uma foto agora...',
      chooseFromLibraryButtonTitle: 'Escolher na galeria...',
      includeBase64: true,
      maxHeight: 1080,
      maxWidth: 1920,
    }, (res) => {
      if (!res.didCancel) {
        this.setState({
          imageBase64: `data:image/gif;base64,${res.base64}`,
        });
      }
    });
  }

  render() {
    const { imageBase64 } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageBase64 }} />
        <TouchableOpacity onPress={this.pickImage}>
          <Text style={styles.selectImage}>Selecionar foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Nome"
          style={styles.inputField}
          onChangeText={(text) => this.setState({ name:  text})}
        />
        <TextInput
          placeholder="Endereço"
          style={styles.inputField}
          onChangeText={(text) => this.setState({ address:  text})}
        />
        <TouchableOpacity style={styles.submitButton} onPress={this.saveStudent}>
          <Text style={styles.submitButtonText} >Salvar</Text>
        </TouchableOpacity>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectImage: {
    color: colors.primary,
    marginBottom: 20
  },
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').width / 4,
  },
  inputField: {
    height: 60,
    borderWidth: 1,
    borderColor: colors.textGrayed,
    color: colors.textPrimary,
    backgroundColor: colors.textSecondary,
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
    marginBottom: 30,
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  submitButtonText: {
    width: '100%',
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: 18,
  }
});

export default NewStudent;
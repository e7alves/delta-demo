import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from './styles/settings'
import Menu from './screens/Menu'
import Students from './screens/Students'
import Student from './screens/Student'
import NewStudent from './screens/NewStudent'
import Navbar from './components/Navbar';

const f = (props) => (
  <View>
    <Navbar {...props} />
  </View>
)

const MainContainer = ({ navigation, children }) => {
  return (
    <View>
      <Navbar navigation={navigation} />
      <View>
        {children}
      </View>
    </View>
  );
}

const mainRoutes = {
  Menu: {
    name: 'Menu',
    screen: Menu,
  },
  Students: {
    name: 'Students',
    screen: (props) => (
      <MainContainer {...props}>
        <Students {...props} />
      </MainContainer>
    ),
  },
  Student: {
    name: 'Student',
    screen: (props) => (
      <MainContainer {...props}>
        <Student {...props} />
      </MainContainer>
    ),
  },
  NewStudent: {
    name: 'NewStudent',
    screen: (props) => (
      <MainContainer {...props}>
        <NewStudent {...props} />
      </MainContainer>
    ),
  },
};

const mainNavigator = createSwitchNavigator(mainRoutes, { initialRouteName: 'Menu' });

export default createAppContainer(mainNavigator);

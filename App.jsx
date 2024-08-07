import {View, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen.jsx';

const App = () => {
  return (
    <View>
      <StatusBar />
      <HomeScreen />
    </View>
  );
};

export default App;

import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';
import CalculadoraScreen from './src/Screens/CalculadoraScreen';
import {styles} from './theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;

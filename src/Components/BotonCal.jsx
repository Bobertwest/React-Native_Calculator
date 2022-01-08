import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const BotonCal = props => {
  const {texto, color = '#2d2d2d', accion, val} = props;
  return (
    <TouchableOpacity onPress={() => accion(val ? val : texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: texto === '0' ? 240 : 100,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCal;

const styles = StyleSheet.create({
  boton: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#9b9b9b',
    justifyContent: 'center',
  },
  botonTexto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
});

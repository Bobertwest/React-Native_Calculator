import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import BotonCal from '../Components/BotonCal';
import useCalculator from '../hooks/useCalculator';

const CalculadoraScreen = () => {
  const [
    numero,
    numeroAnterior,
    clearNumber,
    createnumber,
    positivoNegativo,
    deleteNumber,
    changeOperator,
    resolve,
  ] = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text
        style={styles.resultado}
        adjustsFontSizeToFit
        numberOfLines={1}
        ellipsizeMode="tail">
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCal texto="C" color="#9b9b9b" accion={clearNumber} />
        <BotonCal texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <BotonCal texto="del" color="#9b9b9b" accion={deleteNumber} />
        <BotonCal
          texto="/"
          color="#ff9427"
          accion={changeOperator}
          val="divide"
        />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="7" accion={createnumber} />
        <BotonCal texto="8" accion={createnumber} />
        <BotonCal texto="9" accion={createnumber} />
        <BotonCal
          texto="X"
          color="#ff9427"
          accion={changeOperator}
          val="multriply"
        />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="4" accion={createnumber} />
        <BotonCal texto="5" accion={createnumber} />
        <BotonCal texto="6" accion={createnumber} />
        <BotonCal
          texto="-"
          color="#ff9427"
          accion={changeOperator}
          val="sustract"
        />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="1" accion={createnumber} />
        <BotonCal texto="2" accion={createnumber} />
        <BotonCal texto="3" accion={createnumber} />
        <BotonCal texto="+" color="#ff9427" accion={changeOperator} val="add" />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="0" accion={createnumber} />
        <BotonCal texto="." accion={createnumber} />
        <BotonCal texto="=" color="#ff9427" accion={resolve} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;

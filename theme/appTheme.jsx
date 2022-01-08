import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    marginHorizontal: 35,
  },
  resultado: {
    color: 'white',
    fontSize: 70,
    textAlign: 'right',
    marginHorizontal: 35,
  },
});

import React, {useState} from 'react';

const useCalculator = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [operacion, setOperacion] = useState('');
  const [negativo, setNegativo] = useState(false);

  const clearNumber = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const createnumber = newNumber => {
    if (numero.length >= 25) return;
    if (numero.length <= 1 && numero === '0' && newNumber !== '.') {
      setNumero(newNumber);
    } else {
      if (negativo) {
        setNumero(numero.replace('0', newNumber));
        setNegativo(false);
      } else if (newNumber === '.') {
        if (!numero.includes('.')) {
          setNumero(numero + newNumber);
        }
      } else {
        setNumero(numero + newNumber);
      }
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
      setNegativo(false);
    } else {
      setNumero('-' + numero);
      setNegativo(true);
    }
  };

  const deleteNumber = () => {
    console.log(numero.length);
    if (numero.length <= 1) {
      setNumero('0');
    } else {
      if (numero.length <= 2 && numero.includes('-')) {
        setNumero('0');
      } else {
        setNumero(numero.slice(0, -1));
      }
    }
    setNegativo(false);
  };

  const changeNumber = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const changeOperator = operation => {
    changeNumber();
    setOperacion(operation);
  };

  const resolve = () => {
    let num1 = Number(numero);
    let num2 = Number(numeroAnterior);

    switch (operacion) {
      case 'add':
        setNumero(`${num2 + num1}`);
        break;
      case 'sustract':
        setNumero(`${num2 - num1}`);
        break;
      case 'multiply':
        setNumero(`${num2 * num1}`);
        break;
      case 'divide':
        if (num1 === 0) {
          setNumero('Error');
          setTimeout(() => {
            setNumero('0');
          }, 1300);
        } else {
          setNumero(`${num2 / num1}`);
        }
        break;
      default:
        break;
    }
    setNumeroAnterior('0');
    setOperacion('');
  };

  return [
    numero,
    numeroAnterior,
    clearNumber,
    createnumber,
    positivoNegativo,
    deleteNumber,
    changeOperator,
    resolve,
  ];
};

export default useCalculator;

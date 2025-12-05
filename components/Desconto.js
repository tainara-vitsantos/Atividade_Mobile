import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Desconto = () => {
  const [precoOriginal, setPrecoOriginal] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [valorDesconto, setValorDesconto] = useState('');
  const [precoFinal, setPrecoFinal] = useState('');

  function calcular() {
    const preco = parseFloat(precoOriginal);
    const pct = parseFloat(porcentagem);

    if (isNaN(preco) || preco <= 0 || isNaN(pct) || pct <= 0) {
      setValorDesconto('Entrada inválida');
      setPrecoFinal(null);
      return;
    }

    const desconto = (preco * pct) / 100;
    const final = preco - desconto;

    setValorDesconto(`R$ ${desconto.toFixed(2)}`);
    setPrecoFinal(`R$ ${final.toFixed(2)}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Desconto</Text>

      <TextInput
        style={styles.input}
        placeholder="Preço original"
        placeholderTextColor="#aaa"
        value={precoOriginal}
        onChangeText={setPrecoOriginal}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Percentual de desconto (%)"
        placeholderTextColor="#aaa"
        value={porcentagem}
        onChangeText={setPorcentagem}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={calcular} />

      <View style={styles.resultadoArea}>
        <Text style={styles.resultadoTitle}>Resultados</Text>
        <Text style={styles.resultado}>Desconto: {valorDesconto}</Text>
        <Text style={styles.resultado}>Preço final: {precoFinal}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#000',
  },

  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
    marginBottom: 15,
    fontSize: 16,
  },

  resultadoArea: {
    marginTop: 30,
    backgroundColor: '#527ecfff',
    padding: 20,
    borderRadius: 10,
  },

  resultadoTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },

  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
});

export default Desconto;

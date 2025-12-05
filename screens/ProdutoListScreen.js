import { View, Text, StyleSheet, Button } from 'react-native'
import ProdutoList from '../components/ProdutoList'

export default function ProdutosListScreen({ navigation }) {
  return (
    <View style={estilos.container}>

      <View style={estilos.lista}>
        <ProdutoList />
      </View>

      <View style={estilos.botoesContainer}>
        <View style={estilos.botao}>
          <Button
            title='Voltar para Home'
            onPress={() => navigation.navigate('Home')}
            color="#585a5fff"
          />
        </View>

        <View style={estilos.botao}>
          <Button
            title='Ir para Calculo de Desconto'
            onPress={() => navigation.navigate('Desconto')}
            color="#5f636bff"
          />
        </View>
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  lista: {
    flex: 1, 
    width: '100%',
  },

  botoesContainer: {
    padding: 20,
    backgroundColor: '#000'
  },

  botao: {
    marginBottom: 12,
  },
})

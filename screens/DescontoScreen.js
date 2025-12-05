import { View, Text, StyleSheet, Button } from 'react-native'
import Desconto from '../components/Desconto'

export default function DescontoScreen({ navigation }) {
  return (
    <View style={estilos.container}>
      < Desconto />
      <View style={estilos.botao}>
        <Button
          title='Voltar para Home'
          onPress={() => navigation.navigate('Home')}
          color="#0c111bff"
        />
      </View>

      <View style={estilos.botao}>
              <Button
                title='Carros + Caros do mundo'
                onPress={() => navigation.navigate('ProdutoList')}
                color="#0c111bff"
              />
            </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: '60%',
    marginTop: 20,
  },
})

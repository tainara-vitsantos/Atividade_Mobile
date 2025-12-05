import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={estilos.container}>
            <Text>Tela inicial</Text>
            <View style={estilos.botao}>
                <Button
                    title='Calcule o desconto'
                    onPress={() => navigation.navigate('Desconto')}
                />
            </View>

            <View style={estilos.botao}>
                <Button
                    title='Carros mais caros do Mundo'
                    onPress={() => navigation.navigate('ProdutoList')}
                />
            </View>

        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7e7979ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        width: '60%',
        marginTop: 20,
    }
})
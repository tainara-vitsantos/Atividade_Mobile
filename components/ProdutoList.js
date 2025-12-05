import { FlatList, View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

export default function ProdutoList() {

  const produtos = [
    {
      id: 1,
      nome: 'Rolls-Royce Boat Tail',
      marca: 'Rolls-Royce',
      modelo: 'Boat Tail',
      ano: 2023,
      cor: 'Rosa Pérola',
      preco: 'US$ 28,0 milhões',
      descricao: 'O carro mais caro do mundo, totalmente artesanal e sob encomenda.',
      imagem: 'https://s2-autoesporte.glbimg.com/U3ccmy6ORzvh0_iBQiFZBpcmum4=/0x0:1200x735/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/T/O/B1QIAoQuW1Roi9TVMaKQ/rolls-royceboattail-thenextchapterlakecomo-11.jpg'
    },
    {
      id: 2,
      nome: 'Bugatti La Voiture Noire',
      marca: 'Bugatti',
      modelo: 'La Voiture Noire',
      ano: 2019,
      cor: 'Preto',
      preco: 'US$ 18,7 milhões',
      descricao: 'Modelo único com motor W16 de 1.500 cv.',
      imagem: 'https://cdn.motor1.com/images/mgl/q4Jwv/s3/bugatti-la-voiture-noire-definitive.jpg'
    },
    {
      id: 3,
      nome: 'Pagani Zonda HP Barchetta',
      marca: 'Pagani',
      modelo: 'Zonda HP Barchetta',
      ano: 2020,
      cor: 'Azul com Fibra de Carbono',
      preco: 'US$ 17,5 milhões',
      descricao: 'Apenas 3 unidades produzidas no mundo.',
      imagem: 'https://i.ytimg.com/vi/V2ksl7E4OPQ/maxresdefault.jpg'
    },
    {
      id: 4,
      nome: 'Rolls-Royce Sweptail',
      marca: 'Rolls-Royce',
      modelo: 'Sweptail',
      ano: 2017,
      cor: 'Azul Marinho',
      preco: 'US$ 13,0 milhões',
      descricao: 'Luxo extremo, inspirado em iates de alto padrão.',
      imagem: 'https://www.wermac.org/relax/expensive_cars/car_RR_sweptail_1.jpg'
    },
    {
      id: 5,
      nome: 'Bugatti Centodieci',
      marca: 'Bugatti',
      modelo: 'Centodieci',
      ano: 2021,
      cor: 'Branco Perolado',
      preco: 'US$ 9,0 milhões',
      descricao: 'Supercarro inspirado no clássico EB110.',
      imagem: 'https://cdn.motor1.com/images/mgl/kP3qN/s1/4x3/bugatti-centodieci.webp'
    },
    {
      id: 6,
      nome: 'Mercedes-Maybach Exelero',
      marca: 'Mercedes-Maybach',
      modelo: 'Exelero',
      ano: 2005,
      cor: 'Preto',
      preco: 'US$ 8,0 milhões',
      descricao: 'Modelo único, famoso pelo design agressivo.',
      imagem: 'https://w0.peakpx.com/wallpaper/414/246/HD-wallpaper-maybach-exelero-concept-cars-exelero-maybach-concept.jpg'
    },
    {
      id: 7,
      nome: 'Koenigsegg CCXR Trevita',
      marca: 'Koenigsegg',
      modelo: 'CCXR Trevita',
      ano: 2010,
      cor: 'Prata Diamante',
      preco: 'US$ 4,8 milhões',
      descricao: 'Carro com fibra de carbono revestida de diamante.',
      imagem: 'https://news.dupontregistry.com/wp-content/uploads/2023/07/346477470_995458231861864_6572273882173333404_n-scaled.jpg'
    },
    {
      id: 8,
      nome: 'Lamborghini Veneno Roadster',
      marca: 'Lamborghini',
      modelo: 'Veneno Roadster',
      ano: 2014,
      cor: 'Preto',
      preco: 'US$ 4,5 milhões',
      descricao: 'Edição limitada com apenas 9 unidades.',
      imagem: 'https://conteudo.imguol.com.br/c/entretenimento/3e/2024/04/05/lamborghini-veneno-roadster-2015-1712330604421_v2_900x506.jpg'
    },
    {
      id: 9,
      nome: 'Bugatti Chiron Super Sport 300+',
      marca: 'Bugatti',
      modelo: 'Chiron Super Sport 300+',
      ano: 2021,
      cor: 'Preto e Laranja',
      preco: 'US$ 3,9 milhões',
      descricao: 'Passou dos 490 km/h, um dos mais rápidos do mundo.',
      imagem: 'https://s2-autoesporte.glbimg.com/2ZVPYBO3VA-wTAWY8H1t6GAH0Ts=/0x0:1758x1059/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/H/d/LnLfRDQU60D7KzA0kLxw/bugatti-chiron-ss-300-is-officially-dead-final-copy-gets-delivered-to-its-owner-194086-1.jpg'
    },
    {
      id: 10,
      nome: 'Lamborghini Sian',
      marca: 'Lamborghini',
      modelo: 'Sian',
      ano: 2022,
      cor: 'Verde',
      preco: 'US$ 3,6 milhões',
      descricao: 'Primeiro híbrido da marca com 819 cv.',
      imagem: 'https://cdn.motor1.com/images/mgl/WpLQq/s1/lamborghini-sian-roadster.webp'
    }
  ];

  const itemRenderizado = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover 
        source={{ uri: item.imagem }}
        resizeMode="cover"
      />

      <Card.Title 
        title={item.nome} 
        subtitle={`${item.marca} • ${item.modelo} • ${item.ano} • ${item.cor}`}
      />

      <Card.Content>
        <Text style={styles.preco}>{item.preco}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={itemRenderizado}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000'
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff'
  },
  preco: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16
  }
});

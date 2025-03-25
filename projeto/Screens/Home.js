import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home(){
    return(
        <View> 
            <View style={styles.container1} >
            <Text>Está procurando um lugar confortável e com a melhor seleção de massas da região? Então venha conhecer a nossa seleção especial de massas e se prepare para ter uma noite inesquecível. Faça a sua reserva por telefone número do restaurante ou pelo nosso site site do restaurante. Estamos te esperando!</Text>
            <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS201pZ13MhGBgmiKGsX8YK_KO5nVwqGmAIcg&s',}}/>
            <Text>Coma como se ninguém estivesse te observando. Principalmente quando estiver sozinho com uma pizza inteira na sua frente. </Text>
            <Image source={require('assets/imgg.jpg')}/>
            <Text>A parte pra sobremesa fica em um espacinho diferente no nosso estômago. Confia! </Text>
            <Image style={styles.logo} source={{ uri: 'https://img.freepik.com/vetores-gratis/colecao-de-adesivos-de-midia-social-com-letras-em-espanhol_23-2150918569.jpg',}}/>
            <Image style={styles.logo} source={{ uri: 'https://cdn.pensador.com/img/imagens/pe/ns/pensador_frases_de_comida_02_comida_e_a_resposta.jpg?auto_optimize=low&width=655',}}/>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        height: 200,
        width: 50,
    },
  });
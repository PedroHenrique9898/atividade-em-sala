import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home(){
    return(
        <View>
            <Text style={styles.creditos}>creditos</Text>
            
            <TextInput
                style={styles.txtinput}
                placeholder= "nome"
                placeholderTextColor={'BLACK'}
            />
            <TextInput
                style={styles.txtinput}
                placeholder='mensagem'
                placeholderTextColor={'BLACK'}
            />
           <Button
           
                title="Enviar"
                color={'blue'}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container1: { 
        txt: {
        alignSelf: 'flex-end',
        fontSize: 20
},
    creditos: {
        alignSelf: 'center',
        fontSize: 20
},
    tam: {
        fontSize: 20
},
    txtinput: {
        borderWidth: 0.5,
        borderRadius: 5,
}
    }
    })
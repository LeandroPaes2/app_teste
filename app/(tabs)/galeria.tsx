import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Galeria() {
    return (
        // ScrollView -> serve para fazer scroll na tela
        <ScrollView style={estilos.container}> 
            <Text style={estilos.titulo}>Imagem local</Text>

            <Image
                source={require('../../assets/images/teste.png')}  // require() -> serve para importar imagens
                style={estilos.imagem}
            />

            <Text style={estilos.titulo}>Imagem da internet</Text>

            <Image
                source={{uri: 'https://picsum.photos/300'}} // uri -> serve para importar imagens da internet
                style={estilos.imagem}
            />
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#dde4f2',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    imagem: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
});
import { useState } from 'react' // controla os valores digitados
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; // adicionar icones: https://icons.expo.fyi/Index
import { useRouter } from 'expo-router';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const router = useRouter();

    function enviar() {
        if (nome.trim() === '' || mensagem.trim() === '') {
            Alert.alert('Preencha todos os campos!')
            return;
        }
        router.push(`/detalhes?nome=${encodeURIComponent(nome)}`); // encodeURIComponent() -> serve para codificar valores de texto que vão ser usados na URL
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Formulário de Contato
            </Text>

            <Text>
                Nome:
            </Text>
            <TextInput
                placeholder='Digite seu nome...'
                value={nome}
                onChangeText={setNome}
                style={style.input}>
            </TextInput>

            <Text>
                Mensagem:
            </Text>
            <TextInput
                placeholder='Digite sua mensagem...'
                value={mensagem}
                onChangeText={setMensagem}
                multiline
                style={style.input}>
            </TextInput>

            <TouchableOpacity style={style.botao} onPress={enviar}>
                <FontAwesome name="send" size={18} color="white" style={style.icone} />
                <Text style={style.textoBotao}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#748d9cff",
        padding: 20
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        top: '-27%',
        textAlign: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: 'white',
    },

    botao: {
        flexDirection: 'row',
        backgroundColor: '#0a110aff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    icone: {
        marginRight: 8,
    },

    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

})
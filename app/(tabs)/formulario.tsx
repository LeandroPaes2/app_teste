import { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    function emailValido(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    

    function enviar() {
        if (nome.trim() === '' || email.trim() === '') {
            Alert.alert('Preencha todos os campos!')
            return;
        }

        if (!emailValido(email)) {
        Alert.alert("Email inválido", "Por favor, digite um email válido.");
        return;
    }
        router.push(`/resposta?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}`);
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Formulário
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
                Email:
            </Text>
            <TextInput
                placeholder='Digite seu email...'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
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
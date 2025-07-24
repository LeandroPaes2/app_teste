import { View, Text, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button } from 'react-native-paper'; // biblioteca para estilizar o app
export default function Editar() {
    const { id, nome, email } = useLocalSearchParams();
    const router = useRouter();

    const [novoNome, setNovoNome] = useState(String(nome));
    const [novoEmail, setNovoEmail] = useState(String(email));

    // async -> é uma funcao assincrona 
    async function salvarEdicao() {
        if (novoNome.trim() === '' || novoEmail.trim() === '') {
            Alert.alert('Preencha todos os campos!');
            return;
        }

        try {
            const dadosString = await AsyncStorage.getItem('dados'); // Recupera os dados do armazenamento
            const lista = dadosString ? JSON.parse(dadosString) : []; // Converte os dados para um array

            // Atualiza o item na lista
            const listaAtualizada = lista.map((item: any) =>
                item.id === id ? { ...item, nome: novoNome, email: novoEmail } : item
            );

            // Salva a lista atualizada
            await AsyncStorage.setItem('dados', JSON.stringify(listaAtualizada)); // Converte o array para uma string

            Alert.alert('Editado com sucesso!');
            router.back();
        }
        catch (error) {
            Alert.alert('Erro ao salvar!');
            console.error(error);
        }
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Editar Contato</Text>

            <TextInput
                style={estilos.input}
                value={novoNome}
                onChangeText={setNovoNome}
                placeholder="Nome"
                mode="outlined"
            />

            <TextInput
                style={estilos.input}
                value={novoEmail}
                onChangeText={setNovoEmail}
                placeholder="Email"
                mode="outlined"
            />

            <Button mode="contained" onPress={salvarEdicao}>
                Salvar
            </Button>
        </View>
    );

}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f0f4ff'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: 'white'
    }
});
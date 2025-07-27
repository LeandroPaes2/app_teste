import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, Pressable, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; // para carregar os dados
import { useCallback } from 'react'; // para carregar os dados
import { useUsuarios } from '../contexts/UsuarioContext';
import BotaoPersonalizado from '../../components/BotaoPersonalizado';

export default function Lista() {
    const router = useRouter();
    const { dados, editar, excluir } = useUsuarios();

    // para carregar os dados
    //     useFocusEffect( 
    //     useCallback(() => {
    //         const carregar = async () => {
    //             const salvo = await AsyncStorage.getItem('dados');
    //             if (salvo) {
    //                 setDados(JSON.parse(salvo)); // Converte os dados para um array
    //             }
    //         };
    //         carregar();
    //     }, [])
    // );
    // para salvar os dados
    useEffect(() => {
        AsyncStorage.setItem('dados', JSON.stringify(dados));
    }, [dados]);

    // function removerItem(id: string) {
    //     Alert.alert(
    //         'Confirmar',
    //         'Deseja realmente excluir esse item?',
    //         [
    //             {
    //                 text: 'Sim',
    //                 onPress: () => {
    //                     const novaLinha = dados.filter(item => item.id !== id);
    //                     setDados(novaLinha);
    //                 },
    //                 style: 'destructive'
    //             },
    //             {
    //                 text: 'Nao',
    //                 style: 'cancel'
    //             }
    //         ]
    //     );
    // }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Lista de Usuários</Text>

            <View style={{ top: '40%', position: 'absolute' }}>
                <FlatList
                    data={dados}
                    // key -> serve para identificar os itens da lista
                    keyExtractor={(item) => item.id}
                    // renderItem -> serve para renderizar os itens da lista
                    renderItem={({ item }) => (

                        <View style={styles.item}>
                            <Text style={styles.texto}>Nome: {item.nome}</Text>
                            <Text style={styles.texto}>Email: {item.email}</Text>

                            {/* <Pressable // Pressble -> cria um componente para toque (botão customizável)
                                style={styles.botaoExcluir}
                                onPress={() => removerItem(item.id)}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </Pressable> */}

                            <Pressable style={styles.botaoExcluir} onPress={() => excluir(item.id)}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </Pressable>

                            <Pressable
                                style={styles.botaoExcluir}
                                onPress={() =>
                                    router.push({
                                        pathname: `/editar`,
                                        params: {
                                            id: item.id,
                                            nome: item.nome,
                                            email: item.email
                                        }
                                    }
                                    )}
                            >
                                <Text style={styles.buttonText}>Editar</Text>
                            </Pressable>

                        </View>
                    )}
                />
                
                <BotaoPersonalizado
                    titulo="Adicionar"
                    onPress={() => router.push('/formulario')}
                    icone="add-circle-outline"
                />

            </View>


            {/* <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
                <Ionicons style={styles.icon} name="chevron-back-circle-outline" />
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity> */}


        </View >
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#748d9cff"
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        top: '-27%',
        textAlign: 'center'
    },

    button: {
        backgroundColor: '#0a110aff',
        padding: 10,
        borderRadius: 5,
        marginTop: "5%",
        flexDirection: 'row',
        position: 'absolute',
        top: '80%'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        color: 'white',
        fontSize: 22,
        marginRight: 8,
    },

    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        alignItems: 'center',

    },
    texto: {
        fontSize: 18,
    },

    botaoExcluir: {
        backgroundColor: '#ff5555',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

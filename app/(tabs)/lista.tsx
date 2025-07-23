import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type Pessoas = {
    id: string;
    nome: string;
    email: string;
}

export default function Lista() {
    const router = useRouter();

    const [dados, setDados] = useState<Pessoas[]>([
        { id: '1', nome: 'Ana', email: 'maria@email.com' },
        { id: '2', nome: 'Carlos', email: 'carlos@email.com' },
        { id: '3', nome: 'Mariana', email: 'mariana@email.com' },
    ]);

    function removerItem(id: string) {
        Alert.alert(
            'Confirmar',
            'Deseja realmente excluir esse item?',
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        const novaLinha = dados.filter(item => item.id !== id);
                        setDados(novaLinha);
                    },
                    style: 'destructive'
                },
                {
                    text: 'Nao',
                    style: 'cancel'
                }
            ]
        );
    }

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

                            <Pressable // Pressble -> cria um componente para toque (botão customizável)
                            
                                style={styles.botaoExcluir}
                                onPress={() => removerItem(item.id)}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </Pressable>

                        </View>

                        


                    )}
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

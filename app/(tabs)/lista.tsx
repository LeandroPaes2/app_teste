import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const dados = [
    { id: '1', nome: 'Ana' },
    { id: '2', nome: 'Carlos' },
    { id: '3', nome: 'Mariana' },
];
export default function Lista() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Lista de Usuários</Text>

            <View style={{top: '40%', position: 'absolute'}}>
                <FlatList
                data={dados}
                // key -> serve para identificar os itens da lista
                keyExtractor={(item) => item.id}
                // renderItem -> serve para renderizar os itens da lista
                renderItem={({ item }) => (
                    // Pressble -> cria um componente para toque (botão customizável)
                    <Pressable
                        style={styles.item}
                        onPress={() => router.push(`/detalhes?nome=${encodeURIComponent(item.nome)}`)}
                    >
                        <Text style={styles.texto}>{item.nome}</Text>
                    </Pressable>
                    
                )}
            />
            </View>


            <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
                <Ionicons style={styles.icon} name="chevron-back-circle-outline" />
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>


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

});

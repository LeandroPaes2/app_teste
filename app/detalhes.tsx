// app/detalhes.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // para acessar os dados passados por URL (parâmetros)
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Detalhes() {
    const { nome } = useLocalSearchParams(); // useLocalSearchParams() -> serve para acessar os parâmetros passados por URL

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Detalhes do usuário:</Text>
            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Nome: {nome}</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/lista')}>
                <Ionicons style={styles.icon} name="chevron-back-circle-outline" />
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#748d9cff",
        padding: 20
    },
    button: {
        backgroundColor: '#0a110aff',
        padding: 10,
        borderRadius: 5,
        marginTop: "5%",
        flexDirection: 'row',
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
    }
});
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
export default function Resposta() {
    const { nome, email } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>📩 Resposta enviada!</Text>
            <Text style={styles.texto}>👤 Nome: {nome}</Text>
            <Text style={styles.texto}>📧 Email: {email}</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Ionicons style={styles.icon} name="chevron-back-circle-outline" />
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 18,
        marginTop: 10,
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

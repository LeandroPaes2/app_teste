import { View, Text, Button } from 'react-native';

export default function TelaInicial({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Bem-vindo!</Text>
            <Button title="Ir para Sobre" onPress={() => navigation.navigate('Sobre')} />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});
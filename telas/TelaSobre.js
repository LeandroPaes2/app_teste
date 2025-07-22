import { View, Text, Button } from 'react-native';

export default function TelaSobre({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Esta é a tela Sobre.</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
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
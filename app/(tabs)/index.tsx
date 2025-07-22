import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, Link } from 'expo-router'; // para navegação


export default function Index() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        O Vazio
      </Text>

      {/* onPress -> é uma propriedade que define o que acontece quando você clica, é tipo o onClick */}
      <Link href={'/lista'} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para Lista</Text>
        </TouchableOpacity>
      </Link>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/contato')} >
        <Text style={styles.buttonText}>Ir para Contato</Text>
      </TouchableOpacity>


    </View>
  );
}

// declara o estilos
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
    position: 'absolute',
    top: '10%'
  },

  button: {
    backgroundColor: '#0a110aff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '34%',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
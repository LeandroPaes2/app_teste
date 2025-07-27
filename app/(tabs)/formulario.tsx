import { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // para salvar os dados
import { useEffect } from 'react'; // para carregar os dados salvos
import InputPersonalizado from '../../components/InputPersonalizado';
import BotaoPersonalizado from '../../components/BotaoPersonalizado';
import uuid from 'react-native-uuid'; // para gerar um id
import { useUsuarios } from '../contexts/UsuarioContext';

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const { adicionar } = useUsuarios();
    //const [dados, setDados] = useState<any[]>([]); // para armazenar os dados
    const router = useRouter();

    // carregar os dados salvos
    useEffect(() => {
        async function carregarDadosSalvos() {
            const nomeSalvo = await AsyncStorage.getItem('nome');
            const emailSalvo = await AsyncStorage.getItem('email');
            if (nomeSalvo) setNome(nomeSalvo);
            if (emailSalvo) setEmail(emailSalvo);
        }

        carregarDadosSalvos();
    }, []);


    function validarNome(nome: string) {
        const regex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
        return regex.test(nome.trim());
    }
    function emailValido(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    async function enviar() {
        if (nome.trim() === '' || email.trim() === '') {
            Alert.alert('Preencha todos os campos!')
            return;
        }

        if (!emailValido(email)) {
            Alert.alert("Email inválido", "Por favor, digite um email válido.");
            return;
        }

        try {
            // salvar os dados no armazenamento local
            await AsyncStorage.setItem('nome', nome);
            await AsyncStorage.setItem('email', email);
            router.push(`/resposta?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}`);
        }
        catch (e) {
            Alert.alert('Erro, não foi possivel salvar os dados!')
        }

    }

    function salvar() {
        let temErro = false;

        if (nome.trim() === '' && email.trim() === '') {
            Alert.alert('Preencha todos os campos!')
            return;
        }
        if (nome.trim() === '') {
            setErroNome('O nome é obrigatório');
            temErro = true;
        } else {
            setErroNome('');
        }

        if (email.trim() === '') {
            setErroEmail('O email é obrigatório');
            temErro = true;
        } else {
            setErroEmail('');
        }

        if (!emailValido(email)) {
            Alert.alert("Email inválido", "Por favor, digite um email válido.");
            return;
        }

        if (!validarNome(nome)) {
            Alert.alert("Nome inválido", "Por favor, digite um nome valido.");
        }

        Alert.alert('Salvo com sucesso!')
        // Adiciona novo dado à lista, preservando os existentes
        // const novoItem = { id: Date.now().toString, nome, email };
        // setDados([...dados, novoItem]);

        adicionar({ id: uuid.v4(), nome, email }); // Adiciona um novo item na lista
        router.push('/lista');

        // Limpa os campos
        setNome('');
        setEmail('');
    }


    return (
        <View style={style.container}>
            <Text style={style.title}>
                Formulário
            </Text>

            <InputPersonalizado
                label="Nome"
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
                icon="person"
                obrigatorio
                error={erroNome}
            />

            <InputPersonalizado
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
                icon="mail"
                obrigatorio
                error={erroEmail}
            />


            <BotaoPersonalizado
                titulo="Salvar"
                onPress={salvar}
                icone="checkmark-circle-outline"
            />


            <BotaoPersonalizado
                titulo="Voltar"
                onPress={() => router.back()}
                cor="#ccc"
                textoBranco={false}
                icone="arrow-back"
            />

            {/* <Text>
                Nome:
            </Text>
            {/* <TextInput
                placeholder='Digite seu nome...'
                value={nome}
                onChangeText={setNome}
                style={style.input}>
            </TextInput> */}

            {/* <Text>
                Email:
            </Text>
            <TextInput
                placeholder='Digite seu email...'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                style={style.input}>
            </TextInput> */}

            {/* <TouchableOpacity style={style.botao} onPress={enviar}>
                <FontAwesome name="send" size={18} color="white" style={style.icone} />
                <Text style={style.textoBotao}>Enviar</Text>
            </TouchableOpacity> */}



            {/* <TouchableOpacity style={style.botao} onPress={salvar}>
                <FontAwesome name="save" size={18} color="white" style={style.icone} />
                <Text style={style.textoBotao}>Salvar</Text>
            </TouchableOpacity> */}

            {/* <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.item}>
                        <Text style={style.texto}>{item.nome}</Text>
                        <Text style={style.texto}>{item.email}</Text>
                    </View>
                )}
                style={{ marginTop: 20 }}
            /> */}

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

    // input: {
    //     borderWidth: 1,
    //     borderColor: '#ccc',
    //     padding: 10,
    //     marginBottom: 15,
    //     borderRadius: 5,
    //     backgroundColor: 'white',
    // },

    // botao: {
    //     flexDirection: 'row',
    //     backgroundColor: '#0a110aff',
    //     padding: 12,
    //     borderRadius: 8,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: 10,
    // },
    // icone: {
    //     marginRight: 8,
    // },

    // textoBotao: {
    //     color: 'white',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // },

    // item: {
    //     backgroundColor: '#fff',
    //     padding: 15,
    //     marginBottom: 10,
    //     borderRadius: 8,
    //     alignItems: 'center',

    // },
    // texto: {
    //     fontSize: 18,
    // },

})
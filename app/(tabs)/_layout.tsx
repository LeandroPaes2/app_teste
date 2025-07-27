import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { PaperProvider } from 'react-native-paper'; // biblioteca para estilizar o app
import { UsuarioProvider } from '../contexts/UsuarioContext'; // contexto de usuários

export default function Layout() {
    return (
        <Tabs screenOptions={({ route }) => ({ // screenOptions -> serve para configurar as opções da aba
            tabBarIcon: ({ color, size }) => { // tabBarIcon -> serve para configurar o icone da aba
                let iconName: keyof typeof Ionicons.glyphMap = 'home';

                if (route.name === 'index') iconName = 'home';
                else if (route.name === 'lista') iconName = 'list';
                else if (route.name === 'contato') iconName = 'chatbubble';
                else if (route.name === 'galeria') iconName = 'images';
                else if (route.name === 'formulario') iconName = 'create';



                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato', // cor da aba ativa
            tabBarInactiveTintColor: 'gray', // cor da aba inativa
            headerShown: false // esconde o cabeçalho
        })}>
        </Tabs>
    );

}
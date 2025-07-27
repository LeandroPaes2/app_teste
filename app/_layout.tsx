import { Slot } from 'expo-router'; // para navegação
import { UsuarioProvider } from './contexts/UsuarioContext';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
    return (
        <UsuarioProvider>
            <PaperProvider>
                <Slot />
            </PaperProvider>
        </UsuarioProvider>
    );
}

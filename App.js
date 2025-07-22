import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './TelaInicial';
import TelaSobre from './TelaSobre';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Início" component={TelaInicial} />
                <Stack.Screen name="Sobre" component={TelaSobre} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

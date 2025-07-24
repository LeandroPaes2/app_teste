import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    titulo: string;
    onPress: () => void;
    cor?: string;
    textoBranco?: boolean;
    icone?: keyof typeof Ionicons.glyphMap;
};

export default function BotaoPersonalizado({ 
    titulo, 
    onPress, 
    cor = '#6200ee', 
    textoBranco = true, 
    icone 
}: Props) {
    return (
        <Pressable style={[styles.botao, { backgroundColor: cor }]} onPress={onPress}>
            <View style={styles.conteudo}>
                {icone && <Ionicons name={icone} size={20} color={textoBranco ? '#fff' : '#000'} style={styles.icone} />}
                <Text style={[styles.texto, { color: textoBranco ? '#fff' : '#000' }]}>{titulo}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 8,
    },
    conteudo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icone: {
        marginRight: 8,
    },
});

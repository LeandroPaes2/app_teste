import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    label: string; // rótulo
    value: string; // valor
    onChangeText: (text: string) => void; // função para atualizar o valor
    placeholder: string; // placeholder
    icon: keyof typeof Ionicons.glyphMap; // icone
    obrigatorio?: boolean; // indica se o campo é obrigatório
    error?: string; // mensagem de erro
};

export default function InputPersonalizado({
    label,
    value,
    onChangeText,
    placeholder,
    icon,
    obrigatorio = false,
    error = '',
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
                {obrigatorio && <Text style={{ color: 'red' }}> *</Text>}
            </Text>

            <View style={[styles.inputContainer, error && styles.inputComErro]}>
                <Ionicons name={icon} size={24} style={styles.icon} />
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={styles.input}
                />
            </View>


            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        width: '100%',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 45,
        fontSize: 16,
        backgroundColor: 'white',
    },
    error: {
        marginTop: 4,
        color: 'red',
        fontSize: 12,
    },
    inputComErro: {
        backgroundColor: 'white',
        borderColor: 'red',

    },
});
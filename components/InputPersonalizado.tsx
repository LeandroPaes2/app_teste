import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    label: string; // rótulo
    value: string; // valor
    onChangeText: (text: string) => void; // função para atualizar o valor
    placeholder: string; // placeholder
    icon: keyof typeof Ionicons.glyphMap; // icone
    error?: string; // mensagem de erro
    secureTextEntry?: boolean; // senha
};

export default function InputPersonalizado({
    label,
    value,
    onChangeText,
    placeholder,
    icon,
    error,
    secureTextEntry,
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.inputContainer}>
                <Ionicons name={icon} size={24} style={styles.icon} />

                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
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
    },
    error: {
        marginTop: 4,
        color: 'red',
        fontSize: 12,
    },
});
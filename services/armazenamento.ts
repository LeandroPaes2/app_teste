import AsyncStorage from '@react-native-async-storage/async-storage';

export async function salvarLista(lista: any[]) {
    await AsyncStorage.setItem('dados', JSON.stringify(lista));
}

export async function carregarLista(): Promise<any[]> {
    const dados = await AsyncStorage.getItem('dados');
    return dados ? JSON.parse(dados) : [];
}

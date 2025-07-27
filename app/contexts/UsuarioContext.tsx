import React, { createContext, useContext, useState } from 'react';

type Pessoa = {
    id: string;
    nome: string;
    email: string;
};

type UsuarioContextType = {
    dados: Pessoa[];                      // lista de usuários
    adicionar: (pessoa: Pessoa) => void;  // função para adicionar um novo usuário
    editar: (pessoa: Pessoa) => void;     // função para editar um usuário existente
    excluir: (id: string) => void;        // função para remover um usuário pelo id
};


const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined); // ciar o contexto compatilhado 

// Componente que fornece o contexto para os filhos (children)
export const UsuarioProvider = ({ children }: { children: React.ReactNode }) => {
    const [dados, setDados] = useState<Pessoa[]>([]);

    // Função para adicionar um novo usuário à lista
    const adicionar = (pessoa: Pessoa) => {
        // Adiciona o novo usuário ao final da lista anterior
        setDados(prev => [...prev, pessoa]);
    };

    // Função para editar um usuário existente
    const editar = (Editado: Pessoa) => {
        // Substitui o usuário antigo (mesmo id) pelo novo (Editado)
        setDados(prev =>
            prev.map(pessoa =>
                pessoa.id === Editado.id ? Editado : pessoa
            )
        );
    };

    // Função para excluir um usuário pelo id
    const excluir = (id: string) => {
        // Remove da lista o usuário com o id informado
        setDados(prev =>
            prev.filter(pessoa => pessoa.id !== id)
        );
    };

    // Retorna o Provider do contexto, compartilhando os dados e funções com os filhos
    return (
        <UsuarioContext.Provider
            value={{
                dados,
                adicionar,
                editar,
                excluir
            }}
        >
            {children}  {/* Renderiza os componentes filhos que vão consumir o contexto */}
        </UsuarioContext.Provider>
    );
};

// Hook personalizado para acessar o contexto de usuários
export const useUsuarios = () => {

    // Usa o hook useContext para obter o valor do contexto UsuarioContext
    const context = useContext(UsuarioContext);

    // Se o contexto for undefined, significa que o hook está sendo usado
    // fora do <UsuarioProvider>, o que não é permitido
    if (!context)
        throw new Error('useUsuarios deve ser usado dentro de UsuarioProvider');

    // Retorna o contexto contendo:
    // - a lista de usuários
    // - as funções: adicionarUsuario, editarUsuario e excluirUsuario
    return context;
};

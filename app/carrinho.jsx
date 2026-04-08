import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';
import Botao from '../components/Botao';

export default function CarrinhoScreen() {
    const params = useLocalSearchParams();
    const [itens, setItens] = useState(
        params.itens ? JSON.parse(params.itens) : []
    );
    const [finalizando, setFinalizando] = useState(false);

    const totalPreco = itens.reduce((sum, item) => sum + item.preco, 0);
    const totalItens = itens.length;

    const removerItem = (index) => {
        const novosItens = [...itens];
        novosItens.splice(index, 1);
        setItens(novosItens);
    };

    const limparCarrinho = () => {
        Alert.alert(
        'Limpar carrinho',
        'Tem certeza que deseja remover todos os itens?',
        [
            { text: 'Cancelar', style: 'cancel' },
            { 
            text: 'Limpar', 
            style: 'destructive',
            onPress: () => setItens([])
            },
        ]
        );
    };

    const finalizarPedido = () => {
        setFinalizando(true);
        
        setTimeout(() => {
        const numeroPedido = Math.floor(Math.random() * 10000);
        Alert.alert(
            '✅ Pedido Confirmado!',
            `Pedido #${numeroPedido}\n\nTotal: R$ ${totalPreco.toFixed(2)}\n\nRetire seu pedido na cantina em 15 minutos.\n\nApresente este número no balcão.`,
            [
            { 
                text: 'OK', 
                onPress: () => {
                setFinalizando(false);
                router.replace('/');
                }
            }
            ]
        );
        }, 1000);
    };

    if (itens.length === 0) {
        return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>🛒</Text>
            <Text style={styles.emptyTitle}>Carrinho vazio</Text>
            <Text style={styles.emptyText}>
            Você ainda não adicionou nenhum item ao carrinho.
            </Text>
            <Botao 
            titulo="Voltar ao Cardápio" 
            onPress={() => router.back()}
            />
        </View>
        );
    }

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.totalItens}>{totalItens} itens</Text>
            <TouchableOpacity onPress={limparCarrinho}>
            <Text style={styles.limparTexto}>Limpar tudo</Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={itens}
            renderItem={({ item, index }) => (
            <View style={styles.itemCard}>
                <View style={styles.itemInfo}>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
                </View>
                <TouchableOpacity 
                style={styles.botaoRemover}
                onPress={() => removerItem(index)}
                >
                <Text style={styles.botaoRemoverTexto}>✕</Text>
                </TouchableOpacity>
            </View>
            )}
            keyExtractor={(_, index) => index.toString()}
        />

        <View style={styles.footer}>
            <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValor}>R$ {totalPreco.toFixed(2)}</Text>
            </View>
            
            <Botao 
            titulo="Finalizar Pedido"
            onPress={finalizarPedido}
            loading={finalizando}
            />
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#f5f5f5',
    },
    emptyEmoji: {
        fontSize: 80,
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    totalItens: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    limparTexto: {
        fontSize: 14,
        color: '#D1000F',
        fontWeight: '500',
    },
    itemCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginVertical: 6,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    itemInfo: {
        flex: 1,
    },
    itemNome: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    itemPreco: {
        fontSize: 14,
        color: '#D1000F',
        marginTop: 4,
    },
    botaoRemover: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#fee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoRemoverTexto: {
        color: '#D1000F',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValor: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D1000F',
    },
});
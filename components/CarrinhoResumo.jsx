import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CarrinhoResumo({ itens, onVerCarrinho }) {
    const totalItens = itens.length;
    const totalPreco = itens.reduce((sum, item) => sum + item.preco, 0);

    if (totalItens === 0) {
        return null;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onVerCarrinho}>
        <View style={styles.info}>
            <Text style={styles.icone}>🛒</Text>
            <Text style={styles.texto}>
            {totalItens} {totalItens === 1 ? 'item' : 'itens'}
            </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.info}>
            <Text style={styles.preco}>R$ {totalPreco.toFixed(2)}</Text>
            <Text style={styles.verTexto}>Ver →</Text>
        </View>
        </TouchableOpacity>
    );
    }

    const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#333',
        borderRadius: 50,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    icone: {
        fontSize: 24,
    },
    texto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    preco: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    verTexto: {
        color: '#D1000F',
        fontSize: 14,
        fontWeight: 'bold',
    },
    divider: {
        width: 1,
        height: 30,
        backgroundColor: '#555',
    },
});
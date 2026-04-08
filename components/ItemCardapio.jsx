import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItemCardapioComponent({ item, onAdicionar }) {

const getEmoji = () => {
    const map = {
        lanche: '🍔',
        salgado: '🥟',
        bebida: '🥤',
        sobremesa: '🍰'
    };
    return map[item.categoria] || '🍽️';
};

const getCorCategoria = () => {
    const map = {
        lanche: '#FF6B6B',
        salgado: '#FFA94D',
        bebida: '#4DABF7',
        sobremesa: '#F783AC'
    };
    return map[item.categoria] || '#868E96';
};

return (
        <View style={styles.card}>
        <View style={[styles.categoriaBadge, { backgroundColor: getCorCategoria() }]}>
            <Text style={styles.categoriaTexto}>{item.categoria}</Text>
        </View>
        
        <Text style={styles.emoji}>{getEmoji()}</Text>
        
        <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity 
            style={styles.botaoAdicionar}
            onPress={() => onAdicionar(item)}
        >
            <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        position: 'relative',
    },
    categoriaBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    categoriaTexto: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    emoji: {
        fontSize: 45,
        marginRight: 15,
    },
    info: {
        flex: 1,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    descricao: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    preco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D1000F',
        marginTop: 6,
    },
    botaoAdicionar: {
        backgroundColor: '#D1000F',
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
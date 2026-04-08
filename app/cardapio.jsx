import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { cardapio } from '../constants/cardapio';
import ItemCardapio from '../components/ItemCardapio';
import CarrinhoResumo from '../components/CarrinhoResumo';

export default function CardapioScreen() {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (item) => {
        setCarrinho(prev => [...prev, item]);
    };

    return (
        <View style={styles.container}>
        <FlatList
            data={cardapio}
            renderItem={({ item }) => (
            <ItemCardapio 
                item={item} 
                onAdicionar={adicionarAoCarrinho} 
            />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.lista}
        />
        
        <CarrinhoResumo 
            itens={carrinho}
            onVerCarrinho={() => router.push({ 
            pathname: '/carrinho', 
            params: { itens: JSON.stringify(carrinho) }
            })}
        />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    lista: {
        padding: 15,
        paddingBottom: 100,
    },
});
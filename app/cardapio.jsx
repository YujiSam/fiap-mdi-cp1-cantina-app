import { View, StyleSheet, FlatList } from 'react-native';
import { useContext } from 'react';
import { router } from 'expo-router';
import { cardapio } from '../constants/cardapio';
import ItemCardapio from '../components/ItemCardapio';
import CarrinhoResumo from '../components/CarrinhoResumo';
import { AppDataContext } from '../context/AppDataContext';

export default function CardapioScreen() {
    const { items, addItem } = useContext(AppDataContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={cardapio}
                renderItem={({ item }) => (
                    <ItemCardapio 
                        item={item} 
                        onAdicionar={addItem} 
                />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.lista}
        />
        
        <CarrinhoResumo 
            itens={items}
            onVerCarrinho={() => router.push('/carrinho')}
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
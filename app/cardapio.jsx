import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { useContext, useState } from 'react';
import { router } from 'expo-router';
import { cardapio } from '../constants/cardapio';
import ItemCardapio from '../components/ItemCardapio';
import CarrinhoResumo from '../components/CarrinhoResumo';
import { AppDataContext } from '../context/AppDataContext';


export default function CardapioScreen() {
    const { items, addItem } = useContext(AppDataContext);
    const [busca, setBusca] = useState("");
    const filtrados = cardapio.filter(item =>
        item.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Buscar item..."
                placeholderTextColor="#888"
                style={styles.input}
                onChangeText={setBusca}
            />

            <FlatList
                data={filtrados}
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
        backgroundColor: '#000',
    },
    lista: {
        padding: 15,
        paddingBottom: 100,
    },
    input: {
    backgroundColor: '#111',
        color: '#fff',
        padding: 12,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#222'
    }
});
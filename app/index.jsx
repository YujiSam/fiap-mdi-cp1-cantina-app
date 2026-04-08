import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { router } from 'expo-router';
import Botao from '../components/Botao';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#D1000F" />
        
        <View style={styles.header}>
            <Text style={styles.emojiGrande}>🍔</Text>
        </View>
        
        <View style={styles.content}>
            <Text style={styles.titulo}>Cantina FIAP</Text>
            <Text style={styles.subtitulo}>
            Faça seu pedido com antecedência e evite filas no intervalo!
            </Text>
            
            <View style={styles.beneficios}>
            <View style={styles.beneficioItem}>
                <Text style={styles.beneficioEmoji}>⏱️</Text>
                <Text style={styles.beneficioTexto}>Sem filas</Text>
            </View>
            <View style={styles.beneficioItem}>
                <Text style={styles.beneficioEmoji}>📱</Text>
                <Text style={styles.beneficioTexto}>Fácil e rápido</Text>
            </View>
            <View style={styles.beneficioItem}>
                <Text style={styles.beneficioEmoji}>💰</Text>
                <Text style={styles.beneficioTexto}>Preços justos</Text>
            </View>
            </View>
            
            <Botao 
            titulo="Ver Cardápio" 
            onPress={() => router.push('/cardapio')}
            />
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#D1000F',
        height: 250,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emojiGrande: {
        fontSize: 80,
    },
    content: {
        flex: 1,
        padding: 25,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#D1000F',
        marginTop: 20,
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    beneficios: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 40,
    },
    beneficioItem: {
        alignItems: 'center',
    },
    beneficioEmoji: {
        fontSize: 30,
        marginBottom: 8,
    },
    beneficioTexto: {
        fontSize: 12,
        color: '#666',
    },
});
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { useEffect, useContext } from 'react';
import { router } from 'expo-router';
import Botao from '../components/Botao';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator } from 'react-native';

export default function HomeScreen() {
    const { user, logout, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/login');
        }
    }, [loading, user]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#D1000F" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />

            {/* HEADER */}
            <View style={styles.header}>
                <Image 
                    source={require('../assets/fiap-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Cantina</Text>
            </View>

            {/* CARD PRINCIPAL */}
            <View style={styles.card}>
                <Text style={styles.subtitle}>
                    Faça seu pedido com antecedência e evite filas no intervalo
                </Text>

                <View style={styles.divider} />

                <View style={styles.beneficios}>
                    <View style={styles.beneficioItem}>
                        <Text style={styles.beneficioEmoji}>⏱️</Text>
                        <Text style={styles.beneficioTexto}>Sem filas</Text>
                    </View>

                    <View style={styles.beneficioItem}>
                        <Text style={styles.beneficioEmoji}>📱</Text>
                        <Text style={styles.beneficioTexto}>Rápido</Text>
                    </View>

                    <View style={styles.beneficioItem}>
                        <Text style={styles.beneficioEmoji}>💰</Text>
                        <Text style={styles.beneficioTexto}>Preço justo</Text>
                    </View>
                </View>
            </View>

            {/* AÇÕES */}
            <View style={styles.actions}>
                <Botao 
                    titulo="Ver Cardápio" 
                    onPress={() => router.push('/cardapio')}
                />

                <Botao 
                    titulo="Sair" 
                    onPress={async () => {
                        await logout();
                        router.replace('/login');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },

    header: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 30,
    },

    logo: {
        width: 120,
        height: 50,
        marginBottom: 10,
    },

    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1,
    },

    card: {
        backgroundColor: '#111',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#222',
    },

    subtitle: {
        color: '#aaa',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 20,
    },

    divider: {
        height: 1,
        backgroundColor: '#222',
        marginVertical: 15,
    },

    beneficios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    beneficioItem: {
        alignItems: 'center',
        flex: 1,
    },

    beneficioEmoji: {
        fontSize: 24,
        marginBottom: 5,
    },

    beneficioTexto: {
        color: '#fff',
        fontSize: 12,
    },

    actions: {
        marginTop: 30,
        gap: 15,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    }
});
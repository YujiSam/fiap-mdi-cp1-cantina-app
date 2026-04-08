import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Header({ titulo, mostrarVoltar = false }) {
    return (
        <View style={styles.container}>
        {mostrarVoltar && (
            <TouchableOpacity onPress={() => router.back()} style={styles.botaoVoltar}>
            <Text style={styles.voltarTexto}>←</Text>
            </TouchableOpacity>
        )}
        <Text style={styles.titulo}>{titulo}</Text>
        <View style={styles.placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#D1000F',
        paddingTop: 50,
        paddingBottom: 15,
        paddingHorizontal: 20,
    },
    titulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    botaoVoltar: {
        width: 40,
    },
    voltarTexto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    placeholder: {
        width: 40,
    },
});
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function Botao({ 
    titulo, 
    onPress, 
    cor = '#D1000F', 
    loading = false,
    disabled = false 
}) {
    return (
        <TouchableOpacity 
        style={[
            styles.botao, 
            { backgroundColor: cor },
            disabled && styles.disabled
        ]} 
        onPress={onPress}
        disabled={disabled || loading}
        >
        {loading ? (
            <ActivityIndicator color="#fff" />
        ) : (
            <Text style={styles.texto}>{titulo}</Text>
        )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 200,
    },
    texto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabled: {
        opacity: 0.6,
    },
});
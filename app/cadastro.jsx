import { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "expo-router";
import Botao from "../components/Botao";

export default function Cadastro() {
    const { register } = useContext(AuthContext);
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {

        const emailRegex = /^rm\d+@fiap\.com\.br$/;

        if (!name || !email || password.length < 6 || password !== confirm) {
            setError("Dados inválidos");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Use um email FIAP válido (ex: rm555034@fiap.com.br)");
            return;
        }

        await register({ name, email, password });
        router.replace("/login");
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Cadastro</Text>

                    <Image 
                        source={require('../assets/fiap-logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <TextInput 
                        placeholder="Nome"
                        placeholderTextColor="#888"
                        style={styles.input}
                        onChangeText={setName}
                    />

                    <TextInput 
                        placeholder="Email (ex: rm123456@fiap.com.br)"
                        placeholderTextColor="#888"
                        style={styles.input}
                        onChangeText={setEmail}
                    />

                    <TextInput 
                        placeholder="Senha"
                        placeholderTextColor="#888"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={setPassword}
                    />

                    <TextInput 
                        placeholder="Confirmar senha"
                        placeholderTextColor="#888"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={setConfirm}
                        returnKeyType="done"
                    />

                    {error !== "" && <Text style={styles.error}>{error}</Text>}

                    <Botao titulo="Cadastrar" onPress={handleRegister} />

                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.link}>Já tem conta? Fazer login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        padding: 25,
    },
    title: {
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },
    logo: {
        width: 140,
        height: 60,
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#111",
        borderRadius: 10,
        padding: 15,
        color: "#fff",
        borderWidth: 1,
        borderColor: "#333",
        marginBottom: 10,
    },
    error: {
        color: "#FF4D4D",
        textAlign: "center",
        marginBottom: 10,
    },
    link: {
        color: "#D1000F",
        textAlign: "center",
        marginTop: 15,
        fontWeight: "bold",
    },
});
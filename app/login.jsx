import { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "expo-router";
import Botao from "../components/Botao";

export default function Login() {
    const { login } = useContext(AuthContext);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [errorLogin, setErrorLogin] = useState("");

    const validate = () => {
        let err = {};

        if (!email) err.email = "Email obrigatório";
        if (!password) err.password = "Senha obrigatória";

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleLogin = async () => {
        setErrorLogin("");

        if (!validate()) return;

        const success = await login(email, password);

        if (!success) {
            setErrorLogin("Email ou senha inválidos");
        } else {
            router.replace("/");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Cantina</Text>

                <Image 
                    source={require('../assets/fiap-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.form}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#888"
                    style={styles.input}
                    onChangeText={setEmail}
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}

                <TextInput
                    placeholder="Senha"
                    placeholderTextColor="#888"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={setPassword}
                />
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}

                {errorLogin !== "" && (
                    <Text style={styles.error}>{errorLogin}</Text>
                )}

                <Botao titulo="Entrar" onPress={handleLogin} />

                <TouchableOpacity onPress={() => router.push("/cadastro")}>
                    <Text style={styles.link}>
                        Não tem conta? Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        padding: 25,
    },
    header: {
    alignItems: 'center',
    marginBottom: 30,
    },

    logo: {
        width: 140,
        height: 60,
        marginTop: 10,
    },

    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
    },
    form: {
        gap: 15,
    },
    input: {
        backgroundColor: "#111",
        borderRadius: 10,
        padding: 15,
        color: "#fff",
        borderWidth: 1,
        borderColor: "#333",
    },
    error: {
        color: "#FF4D4D",
        fontSize: 12,
        marginTop: -10,
    },
    link: {
        color: "#D1000F",
        textAlign: "center",
        marginTop: 15,
        fontWeight: "bold",
    },
});
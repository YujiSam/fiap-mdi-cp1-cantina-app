import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const savedUser = await AsyncStorage.getItem("user");
        if (savedUser) setUser(JSON.parse(savedUser));
        setLoading(false);
    };

    const login = async (email, password) => {
        const storedUser = await AsyncStorage.getItem("registeredUser");
        if (!storedUser) return false;

        const parsed = JSON.parse(storedUser);

        if (parsed.email === email && parsed.password === password) {
        await AsyncStorage.setItem("user", JSON.stringify(parsed));
        setUser(parsed);
        return true;
        }

        return false;
    };

    const register = async (data) => {
        await AsyncStorage.setItem("registeredUser", JSON.stringify(data));
    };

    const logout = async () => {
        await AsyncStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading }}>
        {children}
        </AuthContext.Provider>
    );
};
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
    const [items, setItemsState] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const data = await AsyncStorage.getItem("items");
        if (data) setItemsState(JSON.parse(data));
    };

    const saveItems = async (newItems) => {
        setItemsState(newItems);
        await AsyncStorage.setItem("items", JSON.stringify(newItems));
    };

    const addItem = (item) => {
        const updated = [...items, item];
        saveItems(updated);
    };

    const setItems = (newItems) => {
        saveItems(newItems);
    };

    return (
        <AppDataContext.Provider value={{ items, addItem, setItems }}>
            {children}
        </AppDataContext.Provider>
    );
};
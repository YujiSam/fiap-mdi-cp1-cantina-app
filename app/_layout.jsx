import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';
import { AppDataProvider } from '../context/AppDataContext';

export default function RootLayout() {
    return (
        <AuthProvider>
            <AppDataProvider>
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#D1000F',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                        headerTitleAlign: 'center',
                    }}
                >
                    <Stack.Screen 
                        name="index" 
                        options={{ 
                            title: 'Cantina FIAP',
                            headerShown: false,
                        }} 
                    />

                    <Stack.Screen 
                        name="login" 
                        options={{ 
                            title: 'Login',
                            headerShown: false,
                        }} 
                    />

                    <Stack.Screen 
                        name="cadastro" 
                        options={{ 
                            title: 'Cadastro',
                        }} 
                    />

                    <Stack.Screen 
                        name="cardapio" 
                        options={{ 
                            title: 'Cardápio',
                        }} 
                    />

                    <Stack.Screen 
                        name="carrinho" 
                        options={{ 
                            title: 'Meu Carrinho',
                        }} 
                    />
                </Stack>
            </AppDataProvider>
        </AuthProvider>
    );
}
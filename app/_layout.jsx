import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
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
    );
}
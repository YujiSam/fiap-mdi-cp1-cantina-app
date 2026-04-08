import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
        screenOptions={{
            headerStyle: { backgroundColor: '#D1000F' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
        }}
        >
        <Stack.Screen name="index" options={{ title: 'Cantina FIAP' }} />
        <Stack.Screen name="cardapio" options={{ title: 'Cardápio' }} />
        <Stack.Screen name="carrinho" options={{ title: 'Meu Carrinho' }} />
        </Stack>
    );
}
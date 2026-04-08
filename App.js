import { ExpoRoot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    const ctx = require.context('./app', true, /\.jsx?$/);
    return (
        <SafeAreaProvider>
            <ExpoRoot context={ctx} />
        </SafeAreaProvider>
    );
}
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { cores } from '../constants/theme';

export default function RootLayout() {
  const esquema = useColorScheme();
  const tema = cores[esquema === 'dark' ? 'dark' : 'light'];

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: tema.cartao },
        headerTintColor: tema.texto,
        contentStyle: { backgroundColor: tema.fundo },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Minhas Tarefas' }} />
      <Stack.Screen name="add-task" options={{ title: 'Nova Tarefa', presentation: 'modal' }} />
    </Stack>
  );
}
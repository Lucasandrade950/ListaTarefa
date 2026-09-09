import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  useColorScheme,
} from 'react-native';
import { useRouter } from 'expo-router';
import { adicionarTarefa } from '../utils/taskStorage';
import { cores } from '../constants/theme';

export default function AddTask() {
  const router = useRouter();
  const esquema = useColorScheme();
  const tema = cores[esquema === 'dark' ? 'dark' : 'light'];
  const estilos = criarEstilos(tema);

  const [texto, setTexto] = useState('');

  async function salvar() {
    if (texto.trim() === '') {
      Alert.alert('Ops', 'Digite uma tarefa antes de salvar.');
      return;
    }
    await adicionarTarefa(texto.trim());
    router.back();
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Nova Tarefa</Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite sua tarefa..."
        placeholderTextColor={tema.textoSecundario}
        value={texto}
        onChangeText={setTexto}
        autoFocus
      />

      <TouchableOpacity style={estilos.botao} onPress={salvar}>
        <Text style={estilos.textoBotao}>Salvar Tarefa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function criarEstilos(tema: typeof cores.light) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: tema.fundo, paddingHorizontal: 20, paddingTop: 30 },
    titulo: { fontSize: 24, fontWeight: '700', color: tema.texto, marginBottom: 20 },
    input: {
      borderWidth: 1,
      borderColor: tema.borda,
      backgroundColor: tema.cartao,
      color: tema.texto,
      borderRadius: 12,
      padding: 16,
      fontSize: 16,
      marginBottom: 20,
    },
    botao: {
      backgroundColor: tema.primaria,
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
    },
    textoBotao: { color: '#fff', fontSize: 16, fontWeight: '700' },
  });
}
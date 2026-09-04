import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddTask() {
    const router = userRouter();
    const [texto, setTexto] = useState('');

    return (
        <SafeAreaView style={estilos.container}>
        <Text style={estilos.titulo}>Nova Tarefa </Text>

        <TextInput
        style={estilos.input}
        placeholder="Digite sua tarefa..."
        value={texto}
        onChangeText={setTexto}
        />
         
       <TouchableOpacity style={estilos.botao} onPress={() => router.back()}>
        <text style={estilos.textoBotao}>Voltar</text>
       </TouchableOpacity>
        </SafeAreaView>
    );

 const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

}
import { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
};

export default function Home() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: '1', texto: 'Estudar React Native', concluida: false },
    { id: '2', texto: 'Fazer compras', concluida: true },
  ]);

  function alternarConcluida(id: string) {
    const novaLista = tarefas.map((tarefa) =>
      tarefa.id === id ? {... tarefa, concluida: !tarefa.concluida } : tarefa
  );
  setTarefas(novaLista);
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Minhas Tarefas</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alternarConcluida(item.id)}>
          <Text style={estilos.itemTarefa}>
            {item.concluida ? '✅ ' : '⬜ '}
            {item.texto}

          </Text>
          </TouchableOpacity> 
        )}
        />

        <TouchableOpacity style={estilos.botaoFlutuante} onPress={() => router.push('add/task')}>
            <Text style={estilos.textoBotaoFlutuante}>+</Text>
        </TouchableOpacity>
         
    </SafeAreaView>
  );
}





const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  itemTarefa: {
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  botaoFlutuante: {
    position: 'absolute',
    right: 25,
    bottom: 30,
    backgroundColor: '#4a90e2',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,

  },

  textoBotaoFlutuante:{
    color: '#fff',
    fontSize: 30,
    marginTop: -2,
  },
});
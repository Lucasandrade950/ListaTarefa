import AsyncStorage from '@react-native-async-storage/async-storage';

export type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
};

const CHAVE = '@tarefas';

export async function obterTarefas(): Promise<Tarefa[]> {
  const dados = await AsyncStorage.getItem(CHAVE);
  return dados !== null ? JSON.parse(dados) : [];
}

export async function salvarTarefas(tarefas: Tarefa[]): Promise<void> {
  await AsyncStorage.setItem(CHAVE, JSON.stringify(tarefas));
}

export async function adicionarTarefa(texto: string): Promise<Tarefa[]> {
  const tarefas = await obterTarefas();
  const nova: Tarefa = { id: Date.now().toString(), texto, concluida: false };
  const novaLista = [...tarefas, nova];
  await salvarTarefas(novaLista);
  return novaLista;
}

export async function alternarTarefa(id: string): Promise<Tarefa[]> {
  const tarefas = await obterTarefas();
  const novaLista = tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t));
  await salvarTarefas(novaLista);
  return novaLista;
}

export async function removerTarefa(id: string): Promise<Tarefa[]> {
  const tarefas = await obterTarefas();
  const novaLista = tarefas.filter((t) => t.id !== id);
  await salvarTarefas(novaLista);
  return novaLista;
}
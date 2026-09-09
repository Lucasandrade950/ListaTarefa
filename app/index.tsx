import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { cores } from "../constants/theme";
import {
  alternarTarefa,
  obterTarefas,
  removerTarefa,
  Tarefa,
} from "../utils/taskStorage";

export default function Home() {
  const router = useRouter();
  const esquema = useColorScheme(); // 'light' | 'dark' | null
  const tema = cores[esquema === "dark" ? "dark" : "light"];
  const estilos = criarEstilos(tema);

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useFocusEffect(
    useCallback(() => {
      obterTarefas().then(setTarefas);
    }, []),
  );

  async function handleAlternar(id: string) {
    const novaLista = await alternarTarefa(id);
    setTarefas(novaLista);
  }

  async function handleRemover(id: string) {
    const novaLista = await removerTarefa(id);
    setTarefas(novaLista);
  }

  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Minhas Tarefas</Text>
      {tarefas.length > 0 && (
        <Text style={estilos.contador}>
          {concluidas} de {tarefas.length} concluídas
        </Text>
      )}

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <Text style={estilos.vazio}>
            Nenhuma tarefa ainda. Toque em "+" para adicionar.
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.cartao}
            onPress={() => handleAlternar(item.id)}
          >
            <Text
              style={[
                estilos.itemTarefa,
                item.concluida && estilos.itemConcluido,
              ]}
            >
              {item.concluida ? "✅  " : "⬜  "}
              {item.texto}
            </Text>
            <TouchableOpacity
              onPress={() => handleRemover(item.id)}
              hitSlop={10}
            >
              <Text style={estilos.excluir}>🗑️</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={estilos.botaoFlutuante}
        onPress={() => router.push("/add-task")}
      >
        <Text style={estilos.textoBotaoFlutuante}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Recebe o "tema" (light ou dark) e devolve os estilos já com as cores certas
function criarEstilos(tema: typeof cores.light) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: tema.fundo, paddingHorizontal: 20 },
    titulo: {
      fontSize: 30,
      fontWeight: "700",
      color: tema.texto,
      marginTop: 24,
    },
    contador: {
      fontSize: 14,
      color: tema.textoSecundario,
      marginTop: 4,
      marginBottom: 16,
    },
    vazio: {
      textAlign: "center",
      color: tema.textoSecundario,
      marginTop: 60,
      fontSize: 15,
    },
    cartao: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: tema.cartao,
      padding: 16,
      borderRadius: 14,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: tema.borda,
    },
    itemTarefa: { fontSize: 16, color: tema.texto, flex: 1, paddingRight: 10 },
    itemConcluido: {
      textDecorationLine: "line-through",
      color: tema.concluida,
    },
    excluir: { fontSize: 18 },
    botaoFlutuante: {
      position: "absolute",
      right: 20,
      bottom: 30,
      backgroundColor: tema.primaria,
      width: 58,
      height: 58,
      borderRadius: 29,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 6,
    },
    textoBotaoFlutuante: { color: "#fff", fontSize: 30, marginTop: -2 },
  });
}

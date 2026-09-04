import { useState } from 'react';
import { Text, StyleSheet, SafeAreaView} from 'react-native';  
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

type Tarefa ={
  id: string;
  texto: string;
  concluida: boolean;
};

export default function Home () {
 
  const [Tarefas, setTarefas] = useState(['Estudar React Native', 'Fazer compras']);

 return (
  <SafeAreaView>
   <text style={estilos.titulo}>Minhas Tarefas </text>

   <FlatList>
    data={Tarefas}
    keyExtractor={(item:string, index:number) => index.toString()}
    renderItem={({item}:string) => (
      <Text style= {estilos.itemTarefa}>{item}</Text>>
    )}</FlatList>
  </SafeAreaView>
 );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingHorizontal: 20,
  },
  titulo:{
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },

  itemTarefa: {
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
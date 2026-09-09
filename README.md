# 📝 Minhas Tarefas — To Do List

App de lista de tarefas feito com **Expo**, **Expo Router** e **TypeScript**, com suporte a tema claro/escuro e armazenamento local.

## ✨ Funcionalidades

- Adicionar, concluir e excluir tarefas
- Barra de progresso mostrando quantas tarefas foram concluídas
- Dados salvos localmente no celular (persistem ao fechar o app)
- Tema claro e escuro automático, seguindo a configuração do sistema

## 🛠️ Tecnologias e conceitos usados

| Tecnologia | Uso no projeto |
|---|---|
| **Expo Router** | Navegação entre telas baseada em arquivos (`app/index.tsx`, `app/add-task.tsx`) |
| **useState** | Guarda a lista de tarefas e o texto sendo digitado |
| **useFocusEffect** | Recarrega a lista sempre que a tela Home ganha foco |
| **FlatList** | Renderiza a lista de tarefas de forma otimizada |
| **TextInput** | Campo de digitação de nova tarefa |
| **TouchableOpacity** | Botões: concluir, excluir, adicionar, salvar |
| **AsyncStorage** | Persistência local dos dados no dispositivo |
| **@expo/vector-icons** | Ícones (check, lixeira, adicionar) |
| **TypeScript** | Tipagem de dados (`Tarefa`) e funções |

## 📁 Estrutura de pastas

├── app/
│ ├── _layout.tsx # Configuração de navegação (Stack) e tema do cabeçalho
│ ├── index.tsx # Tela inicial — lista de tarefas
│ └── add-task.tsx # Tela de criação de nova tarefa
├── constants/
│ └── theme.ts # Paleta de cores (modo claro e escuro)
├── utils/
│ └── taskStorage.ts # Funções de leitura/escrita no AsyncStorage
└── README.md


## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npx expo start
```

Escaneie o QR code exibido no terminal com o app **Expo Go** (disponível na Play Store / App Store) para abrir no celular.

## 🎨 Personalização

As cores do app ficam centralizadas em `constants/theme.ts`. Para mudar a cor principal, por exemplo, basta alterar o valor de `primaria` nos dois temas (`light` e `dark`).

## 📌 Possíveis melhorias futuras

- Categorias ou prioridades para as tarefas
- Data/hora de vencimento com notificação
- Edição do texto de uma tarefa já criada
- Buscar/filtrar tarefas


## 🤝 Sobre o desenvolvimento

Este projeto foi desenvolvido como parte do meu aprendizado em React Native e Expo, com apoio do **Claude (Anthropic)** como assistente de estudo. A IA foi utilizada para explicar conceitos (useState, useEffect, AsyncStorage, navegação com Expo Router), revisar erros de sintaxe e sugerir melhorias de código e design — mas cada linha foi escrita, testada e compreendida por mim durante o processo, incluindo a depuração de problemas reais de configuração do projeto (Metro bundler, estrutura de rotas, TypeScript).

Encaro o uso de IA como uma ferramenta de estudo, semelhante a documentação ou um tutor — que acelera o aprendizado, mas não substitui a prática de escrever, quebrar e consertar código com as próprias mãos.
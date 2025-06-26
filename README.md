# To-Do List - Frontend & Backend

---

## 🚀 Frontend

### Descrição

Este é o frontend da aplicação **To-Do List**, construído com **React** e **TypeScript**. A interface foi projetada para ser moderna, responsiva e intuitiva, focando em uma excelente experiência de usuário (UI/UX).  
Permite gerenciar tarefas com funcionalidades de criação, edição, exclusão, marcação como favorito, além de filtragem por cor e favoritos.

---

### Tecnologias e Ferramentas Utilizadas

- React 18.x (com TypeScript)
- Sass (pré-processador CSS)
- ESLint e Prettier (padronização de código)
- React Testing Library + Jest (testes unitários)

---

### Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO_FRONTEND>

Instale as dependências:

- npm install
- Inicie o servidor de desenvolvimento:
- npm start
Acesse a aplicação em seu navegador:
http://localhost:3000

Para criar uma build otimizada para produção:

- npm run build

---

### Estrutura do Projeto

- src/
- ├── components/         # Componentes reutilizáveis (Header, TaskList, FilterBar, etc)
- ├── pages/              # Páginas e views (uso futuro)
- ├── services/           # Comunicação com API (fetch/axios)
- ├── styles/             # Estilos globais e variáveis Sass
- ├── tests/              # Testes unitários
- └── App.tsx             # Componente raiz

---

### Funcionalidades Implementadas

- CRUD completo para tarefas via API
- Marcar/desmarcar tarefas como favoritas
- Definir cor personalizada para cada tarefa
- Filtros por cor e favoritos
- Layout responsivo (mobile first)
- Validações básicas nas entradas de dados
- Feedback visual para carregamento e erros
- Componentização organizada para fácil manutenção

---

### Testes

Execute os testes unitários com:

- npm test

---

### Configurações importantes:

- A aplicação roda na porta 3000 por padrão
- A URL da API backend deve estar configurada em src/services/api.ts (ex: http://localhost:4000)

---

### Boas práticas aplicadas

- ESLint + Prettier configurados para padronização do código
- Hooks personalizados para lógica de filtros e estado
- Código documentado com comentários claros
- Pull requests detalhados com explicações

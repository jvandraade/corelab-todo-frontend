To-Do List - Frontend & Backend

FRONTEND
Descrição: Este é o frontend da aplicação To-Do List, construída em React com TypeScript. O foco principal é oferecer uma interface moderna, responsiva e amigável para gerenciar tarefas, com funcionalidades como marcar tarefas favoritas, filtrar por cor, editar e excluir tarefas.

Tecnologias e Frameworks
React 18.x (React TS)

TypeScript

Sass (para estilização)

ESLint e Prettier para padronização de código

React Testing Library + Jest para testes unitários

Instalação
Clone o repositório:

git clone <url-do-repositorio-frontend>
Instale as dependências:

npm install

Rodar o projeto em ambiente de desenvolvimento:

npm start
A aplicação rodará localmente em http://localhost:3000

Para gerar a build de produção:

bash

npm run build

Organização das pastas

src/
├── components/           # Componentes reutilizáveis (TaskList, Header, FilterBar, etc)
├── pages/                # Páginas (separação futura possível)
├── services/             # Serviços de integração com API (fetch, axios)
├── styles/               # Arquivos de estilo global e variáveis Sass
├── tests/                # Testes unitários
└── App.tsx               # Componente principal

Funcionalidades Implementadas
CRUD completo de tarefas via integração com backend

Marcar e desmarcar tarefas como favoritas

Filtrar tarefas por cor e favoritas

Adicionar, editar e deletar tarefas na interface

Layout responsivo e acessível, com design mobile first

Validações básicas de entrada

Feedback visual para ações (loading, erros)

Testes
Para rodar os testes unitários:

bash
npm test
Portas e URLs importantes
Frontend: http://localhost:3000

Backend (para integração): http://localhost:4000 (configurável)

Conteúdos adicionais
Configuração ESLint + Prettier para manter padrão de código

Hooks personalizados para gerenciar estado e filtros

Documentação do código com comentários claros

Configuração para pull requests detalhadas

Como contribuir
Por favor, abra issues ou pull requests para melhorias, bugs ou dúvidas.

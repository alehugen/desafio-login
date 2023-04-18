# Desafio Login

Este é um projeto VueJS 3 para login com cadastro. Ele usa as seguintes dependências:

- [axios](https://github.com/axios/axios) - cliente HTTP para requisições assíncronas
- [dotenv](https://github.com/motdotla/dotenv) - carrega variáveis de ambiente a partir de um arquivo `.env`
- [pinia](https://pinia.esm.dev/) - gerenciador de estado para Vue 3
- [vue](https://v3.vuejs.org/) - framework JavaScript progressivo para construção de interfaces de usuário
- [vue-router](https://router.vuejs.org/) - roteador oficial para Vue.js

## Scripts

- `dev` - inicia o servidor de desenvolvimento com o Vite
- `build` - compila o projeto para produção
- `preview` - serve a compilação de produção localmente para pré-visualização

## Como executar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
VITE_API_URL=http://localhost:3000
```

4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Abra o navegador em `http://localhost:3000`

## Como compilar para produção

1. Siga os passos 1-3 acima
2. Execute `npm run build`
3. A compilação estará disponível na pasta `dist/`

## Licença

Este projeto foi realizado com a fim de teste técnico.

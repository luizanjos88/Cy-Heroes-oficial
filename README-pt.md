# 🦸‍♂️ Aplicação de Demonstração Cypress Heroes 🦸‍♀️

![Cypress Badge](https://img.shields.io/badge/-Cypress-04C38E?style=for-the-badge&logo=cypress&logoColor=white)
![React Badge](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![NestJS Badge](https://img.shields.io/badge/-NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)

*[Read in English / Leia em Inglês](./README-en.md) 🇺🇸*

Bem-vindo ao app **Cypress Heroes**! 🚀
Esta é uma aplicação de demonstração que mostra como usar o Cypress para executar testes **End-to-End (Ponta a Ponta)**, **Componentes** e **API** em uma aplicação full-stack moderna.

---

## 🏗️ Arquitetura e Organização do Projeto

Este aplicativo é um monorepo que usa **npm workspaces** para separar o frontend do backend, mantendo tudo em um único repositório para facilitar o desenvolvimento e os testes.

```text
📦 cypress-heroes
 ┣ 📂 client             # ⚛️ App Frontend em React (construído com Vite)
 ┣ 📂 server             # ⚙️ App Backend em NestJS (usa o ORM Prisma)
 ┣ 📂 cypress            # 🧪 Testes Cypress de End-to-End e API
 ┣ 📂 .github            # 🤖 Workflows de CI/CD para GitHub Actions
 ┣ 📜 package.json       # 📦 Configuração raiz com npm workspaces e scripts
 ┣ 📜 cypress.config.ts  # ⚙️ Configuração do Cypress
 ┣ 📜 README-en.md       # 📖 README em Inglês
 ┗ 📜 README-pt.md       # 📖 Você está aqui!
```

---

## 🚀 Começando

Siga estes passos para ter seus heróis funcionando localmente!

### 1️⃣ Instalar Dependências
Depois de clonar o projeto, instale as dependências na pasta raiz:

```sh
npm install
```

### 2️⃣ Configuração Inicial
Depois disso, mais algumas coisas precisam ser configuradas (como o banco de dados). Execute:

```sh
npm run setup
```

### 3️⃣ Rodar a Aplicação
Para iniciar o aplicativo em modo de desenvolvimento, execute:

```sh
npm run dev
```

> **Nota:** Isso iniciará os aplicativos cliente e servidor em modo de desenvolvimento. 
> 🌐 O site estará disponível em [http://localhost:3000](http://localhost:3000).

---

## 🔎 Visão Geral do Aplicativo

### 🎨 Aplicativo Cliente React (`client/`)
O aplicativo cliente frontend é um aplicativo padrão React desenvolvido com [Vite](https://vitejs.dev/). É rápido, responsivo e pronto para ser testado!

**Variáveis de Ambiente:**
O aplicativo cliente usa uma variável de ambiente para saber qual é a URL para a API do backend, chamada `VITE_API_URL`. O padrão é `"http://localhost:3001"` para uso no modo de desenvolvimento e deve ser substituído em outros ambientes/modos.

### 🛠️ Aplicativo Servidor NestJS (`server/`)
O aplicativo servidor é construído com o framework Node.js [NestJS](https://nestjs.com/). Ele usa o [Prisma](https://www.prisma.io/) como ORM do banco de dados para gerenciar os dados dos heróis.

#### 🗄️ Populando e redefinindo o banco de dados
O banco de dados é populado a partir do script `server/prisma/seed.ts` quando você configura o aplicativo. Se a qualquer momento você quiser redefinir o banco de dados de volta ao seu estado inicial, basta executar:

```sh
npm run resetdb
```

---

## 🧪 Testes

Este projeto utiliza o Cypress para vários níveis de testes para garantir a máxima confiabilidade. Você pode executar os seguintes comandos para rodar os testes em modo CI (Integração Contínua):

- **🕵️ Testes End-to-End (E2E) com Foco no Cliente:**
  Os testes E2E são o coração da nossa garantia de qualidade. Eles estão localizados dentro do diretório `client/cypress/e2e/` e são responsáveis por testar a aplicação sob a perspectiva do usuário final, simulando interações reais.
  Esses testes cobrem jornadas críticas como:
  - 🔐 **Funcionalidades de Login** (`loginfeature.cy.ts`)
  - 🛡️ **Controle de Permissões e Acesso** (`permissionControl.cy.ts`)
  - 🦸 **Recursos e Gerenciamento de Admin** (`adminfeature.cy.ts`)
  - 📜 **Verificação da Lista de Heróis** (`verificationHeroesList.cy.ts`)

  Para rodar os testes E2E no modo CI/Headless (sem interface), use:
  ```sh
  npm run test:e2e:ci
  ```
  *(Para rodar de forma interativa com a interface do Cypress, você pode usar `npx cypress open` de dentro da pasta `client`!)*
- **🧩 Testes de Componente:** Testa componentes individuais do React isoladamente.
  ```sh
  npm run test:ct:ci
  ```
- **🔌 Testes de API:** Testa os endpoints do backend NestJS diretamente.
  ```sh
  npm run test:api:ci
  ```

---
*Bons Testes!* 🎉

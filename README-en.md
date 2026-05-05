# 🦸‍♂️ Cypress Heroes Demo Application 🦸‍♀️

![Cypress Badge](https://img.shields.io/badge/-Cypress-04C38E?style=for-the-badge&logo=cypress&logoColor=white)
![React Badge](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![NestJS Badge](https://img.shields.io/badge/-NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)

*[Leia em Português / Read in Portuguese](./README-pt.md) 🇧🇷*

Welcome to the **Cypress Heroes** app! 🚀 
This is a demo application that shows how to use Cypress to run **End-to-End**, **Component**, and **API** tests against a modern full-stack application.

---

## 🏗️ Project Architecture & Organization

This app is a monorepo that uses **npm workspaces** to separate the frontend from the backend, keeping everything in a single repository for easy development and testing.

```text
📦 cypress-heroes
 ┣ 📂 client             # ⚛️ React Frontend app (built with Vite)
 ┣ 📂 server             # ⚙️ NestJS Backend app (uses Prisma ORM)
 ┣ 📂 cypress            # 🧪 Cypress End-to-End & API Tests
 ┣ 📂 .github            # 🤖 CI/CD workflows for GitHub Actions
 ┣ 📜 package.json       # 📦 Root config with npm workspaces and scripts
 ┣ 📜 cypress.config.ts  # ⚙️ Cypress Configuration
 ┣ 📜 README-pt.md       # 📖 Portuguese README
 ┗ 📜 README-en.md       # 📖 You are here!
```

---

## 🚀 Getting Started

Follow these steps to get your heroes up and running locally!

### 1️⃣ Install Dependencies
Once you clone the project, install the dependencies at the root folder:

```sh
npm install
```

### 2️⃣ Initial Setup
After that, a few more things need to be set up (like the databases). Run:

```sh
npm run setup
```

### 3️⃣ Run the Application
To launch the app for development, run:

```sh
npm run dev
```

> **Note:** This will start both the client and server apps in dev mode. 
> 🌐 The site will be available at [http://localhost:3000](http://localhost:3000).

---

## 🔎 App Overview

### 🎨 React Client App (`client/`)
The frontend client app is a standard React app powered by [Vite](https://vitejs.dev/). It is fast, responsive, and ready to be tested! 

**Environment Variables:**
The client app uses an environment variable to know what the URL is for the backend API named `VITE_API_URL`. It defaults to `"http://localhost:3001"` for use in dev mode, and should be overridden in other environments/modes.

### 🛠️ NestJS Server App (`server/`)
The server app is built with the [NestJS](https://nestjs.com/) Node.js framework. It uses [Prisma](https://www.prisma.io/) as the database ORM to manage the heroes' data.

#### 🗄️ Database seeding and resetting
The database is seeded from the `server/prisma/seed.ts` script when you set up the app. If at any time you want to reset the database back to its initial state, simply run:

```sh
npm run resetdb
```

---

## 🧪 Testing

This project utilizes Cypress for various levels of testing to ensure maximum reliability. You can run the following commands to execute the tests in CI mode:

- **🕵️ End-to-End (E2E) Tests (Client Focus):** 
  The E2E tests are the core of our quality assurance. They are located inside the `client/cypress/e2e/` directory and are responsible for testing the application from the user's perspective. 
  These tests cover critical user journeys like:
  - 🔐 **Login Features** (`loginfeature.cy.ts`)
  - 🛡️ **Permission & Access Control** (`permissionControl.cy.ts`)
  - 🦸 **Admin Features & Management** (`adminfeature.cy.ts`)
  - 📜 **Heroes List Verification** (`verificationHeroesList.cy.ts`)
  
  To run the E2E tests in CI/headless mode, use:
  ```sh
  npm run test:e2e:ci
  ```
  *(To run them interactively, you can use `npx cypress open` from inside the `client` folder!)*
- **🧩 Component Tests:** Tests individual React components in isolation.
  ```sh
  npm run test:ct:ci
  ```
- **🔌 API Tests:** Tests the NestJS backend endpoints directly.
  ```sh
  npm run test:api:ci
  ```

---
*Happy Testing!* 🎉

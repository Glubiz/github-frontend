# Running and Building the Vite App

This document provides instructions on how to run and build the Vite app, as well as the overall design of the application.

## Running the App

To run the app in development mode, follow these steps:

Open your terminal.
Navigate to the project directory.
Run the following command

```bash
  npm run dev
```

This command starts the Vite development server. You can view the app by opening http://localhost:3000 in your browser.

## Building the App
To build the app for production, follow these steps:

Open your terminal.
Navigate to the project directory.
Run the following command:
  
```bash
  npm run build
```

This command creates a dist directory with a production build of your app.

# Application Design

This section will provide an overview of the application design.

## Design Decisions

The application is built using the following technologies:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://material-ui.com/)

The application is built using React, which is a popular JavaScript library for building user interfaces. React is a good choice for this application because it is fast, scalable, and simple to use. React also has a large ecosystem of libraries and tools that can be used to build complex applications.

Vite is a fast and lightweight build tool for modern web applications. Vite is a good choice for this application because it is fast, simple to use, and has a large ecosystem of plugins and tools.

Material UI is a popular React UI framework that provides a set of reusable components that can be used to build user interfaces. Material UI is a good choice for this application because it provides a set of components that can be used to build the user interface.

## Appliction UI

The application UI is built with simplicity in mind. The UI consists of 2 pages: a home page where the user can enter their github username and a dashboard page where the user can view their github profile information.

Using Material UI, the application UI is built using a set of reusable components. The UI is responsive and works well on mobile devices. 
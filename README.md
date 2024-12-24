# Welcome to The Splendid Webjet UI

Webjet UI provides an exceptional hotel booking experience that is unmatched by any competitors.

This ReadMe will provide some basic answers to getting Webjet UI setup and running on your system.

## Run Webjet UI using Docker for Local Development
TO DO

## Run Webjet UI using NodeJS for Local Development

### Install Node Version Manager (NVM)
1. NodeJS is a JavaScript runtime that allows developers to write JavaScript applications and run them essentially everywhere. Our code requires node and the most simplified method of installing and managing NodeJS versions is to use Node Version Manager (NVM).
    2. To install NVM follow the official documentation on NVM's website https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
    3. Windows has separate packages for managing node versions like so https://github.com/coreybutler/nvm-windows
2. Once NVM is installed lets ask NVM to install the latest LTS version of NodeJS. This is the version used for writing this project so its important to stay consistent.
3. Open your terminal and type `nvm install v22.12.0` and hit enter. If using windows you may be asked to run as administrator.
4. Once installed type `nvm use v22.12.0` to switch over to the newly installed version of node.
5. Verify the installation was successful by typing `node --version` into your terminal. You should see `v22.12.0` in your terminal window.

### Install Dependencies
1. To install node dependencies type `npm install`.

### Start the development Server
1. To start the development server type `npm run dev`.
2. You should now be able to open http://localhost:5173 in your browser of choice and see the website running.

## How to build and deploy Webjet UI on a Server
TO DO

## How can I see WebjetUI?
TO DO

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

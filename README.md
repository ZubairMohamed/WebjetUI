# Welcome to The Splendid Webjet UI

Webjet UI provides an exceptional hotel booking experience that is unmatched by any competitors.

This ReadMe will provide some basic answers to getting Webjet UI setup and running on your system.

## Run Webjet UI using Docker for Local Development
1. Follow the official documentation on dockers website to ensure that Docker is setup and running on your system.
   2. Visit https://docs.docker.com/get-started/get-docker/ and pick your desired OS to follow the step by step guide.
   3. Internally Docker uses HyperV/WSL for windows you may also need to refer to https://learn.microsoft.com/en-us/windows/wsl/install to setup WSL.
2. In your terminal of choice e.g. Powershell, CMD, Terminal clone this repo from Github `git clone` and change directory using `cd` into the root of this project. 
3. Run the following command instruct docker to build the docker image `docker build -t webjetui .` named webjetui.
4. Run the docker image using `docker compose up`. If you want to run the docker image in the background `docker compose up -d`
5. You should now be able to open http://localhost:5173 in your browser of choice and see the website running.

## Run Webjet UI using NodeJS for Local Development

### Install Node Version Manager (NVM)
1. Open your terminal of choice change directory using the `cd` command so that you have this repo open in your terminal window. You should see something like `/mnt/c/Users/.../webjetui$`
2. NodeJS is a JavaScript runtime that allows developers to write JavaScript applications and run them essentially everywhere. Our code requires node and the most simplified method of installing and managing NodeJS versions is to use Node Version Manager (NVM).
    2. To install NVM follow the official documentation on NVM's website https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
    3. Windows has separate tools for managing node versions. You may wish to follow the guide here https://github.com/coreybutler/nvm-windows
3. Once NVM is installed lets ask NVM to install the latest LTS version of NodeJS. This is the version used for writing this project so it's important to stay consistent. 
4. In your terminal window  type `nvm install v22.12.0` and hit enter. If using windows you may be asked to run this as administrator. 
5. Once installed type `nvm use v22.12.0` to switch over to the newly installed version of node. 
6. Verify the installation was successful by typing `node --version` into your terminal. You should see `v22.12.0` in your terminal window.

### Install Dependencies
1. To install node dependencies type `npm install` in your terminal window inside the root folder of this project.

### Start the development Server
1. To start the development server type `npm run dev` in your terminal window inside the root folder of this project.
2. You should now be able to open http://localhost:5173 in your browser of choice and see the website running.

## How to build and deploy Webjet UI on a Server
TO DO

## How can I see WebjetUI?
A deployed version of the site can be accessed at https://webjetui.netlify.app/

## Design Decisions and Limitations 
- This project uses Vite to bootstrap and build the React project. There are other tools available to do this like create react app etc.

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

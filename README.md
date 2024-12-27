# Welcome to The Splendid Webjet UI

Webjet UI provides an exceptional hotel booking experience that is unmatched by any competitors.

This ReadMe will provide some basic answers to getting Webjet UI setup and running on your system.

## Run Webjet UI using Docker for Local Development
1. Follow the official documentation on dockers website to ensure that Docker is setup and running on your system. 
   - Visit https://docs.docker.com/get-started/get-docker/ and pick your desired OS to follow the step by step guide. 
   - Internally Docker uses HyperV/WSL for windows you may also need to refer to https://learn.microsoft.com/en-us/windows/wsl/install to setup WSL.
2. In your terminal of choice e.g. Powershell, CMD, Terminal clone this repo from Github `git clone https://github.com/ZubairMohamed/WebjetUI.git` and change directory using `cd` into the root of this project. 
3. Run the following command instruct docker to build the docker image `docker build -t webjetui .` named webjetui.
4. Run the docker image using `docker compose up`. If you want to run the docker image in the background `docker compose up -d`
5. You should now be able to open http://localhost:5173 in your browser of choice and see the website running.

## Run Webjet UI using NodeJS for Local Development

### Install Node Version Manager (NVM)
1. Open your terminal of choice change directory using the `cd` command so that you have this repo open in your terminal window. You should see something like `/mnt/c/Users/.../webjetui$`
2. NodeJS is a JavaScript runtime that allows developers to write JavaScript applications and run them essentially everywhere. Our code requires node and the most simplified method of installing and managing NodeJS versions is to use Node Version Manager (NVM).
   - To install NVM follow the official documentation on NVM's website https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
   - Windows has separate tools for managing node versions. You may wish to follow the guide here https://github.com/coreybutler/nvm-windows
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
- Open terminal and make sure you have npm and node working by following the nvm guide.
- In terminal navigate to the root of this repo using `cd`.
- Type and run `npm run build`.
- To serve the files locally from the dist folder you can run `npm run preview`. 
- Open `http://localhost:4173/` in your browser to view the built website. The terminal window should list the url to open if it is different to this one.
- The project should be built using vite and a `dist` folder will appear in the root of this repo.
- You can simply upload the dist folder to any web hosting provider like netlify and it will deploy the site for you. 
- Many web hosting services allow you to integrate with GitHub by linking your repository the webhost can automatically deploy changes as a production ready website.

## How can I see WebjetUI?
A deployed version of the site can be accessed at https://webjetui.netlify.app/

## How Breakpoints work in the code?
- The breakpoints are mentioned inside the `tailwind.config.js` file.
- Where the breakpoint is not explicitly mentioned it is treated as the code for mobile and above. If another breakpoint follows it with a competing style then once the breakpoint is met the style will be overriden with the other style.
- The tablet breakpoint `'tablet': '768px'` describes the situation where the width/viewport is at a minimum of `768px` or above.
- The laptop breakpoint `'laptop': '992px'` describes the situation where the width/viewport is at a minimum of `992px` or above. 
- The desktop breakpoint `'desktop': '1200px'` describes the situation where the width/viewport is at a minimum of `1200px` or above.

## Design Decisions and Limitations 
- This project uses Vite to bootstrap and build the React project. There are other tools available to do this like create react app etc.
- Docker compose was used to accommodate a growing code base. We can easily spin up other services/backends using the compose file compared to docker run.
- Project does not describe any fonts, font sizes, padding, margins, colours. To make estimates of these value I used various tools and technology such as Figma combined with my best judgement where appropriate. For example the UI seems to be using the Roboto font which would also match with fonts used across webjet.com.au.
- At the time of developing React 19 has just been released. I still opted for React 18 as this has been used in the field for longer than the latest version which is helpful for the stability of the project. It will also be supported for quite some time before we need to upgrade.

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

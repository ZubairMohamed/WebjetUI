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
4. In your terminal window type `nvm install v22.12.0` and hit enter. If using windows you may be asked to run this as administrator.
5. Once installed type `nvm use v22.12.0` to switch over to the newly installed version of node.
6. Verify the installation was successful by typing `node --version` into your terminal. You should see `v22.12.0` in your terminal window.

### Install Dependencies

1. To install node dependencies type `npm install` in your terminal window inside the root folder of this project.

### Start the development Server

1. To start the development server type `npm run dev` in your terminal window inside the root folder of this project.
2. You should now be able to open http://localhost:5173 in your browser of choice and see the website running.

## How to build and deploy Webjet UI on a Server

- Open terminal and make sure you have npm and node working by following the [nvm guide above and having dependencies installed.](#Run-Webjet-UI-using-NodeJS-for-Local-Development)
- In terminal navigate to the root of this repo using `cd`.
- Type and run `npm run build`.
- To serve the files locally from the dist folder you can run `npm run preview`.
- Open `http://localhost:4173/` in your browser to view the built website. The terminal window should list the url to open if it is different to this one.
- The project should be built using vite and a `dist` folder will appear in the root of this repo.
- You can simply upload the dist folder to any web hosting provider like netlify and it will deploy the site for you.
- Many web hosting services allow you to integrate with GitHub. By linking your repository the web host can automatically deploy changes as a production ready website.

## How can I see WebjetUI?

A deployed version of the site can be accessed at https://webjetui.netlify.app/

## How Breakpoints work in the code?

- The breakpoints are mentioned inside the `tailwind.config.js` file.
- Where the breakpoint is not explicitly mentioned it is treated as the code for mobile and above. If another breakpoint follows it with a competing style then once the breakpoint is met the style will be overridden with the other style.
- The tablet breakpoint `'tablet': '768px'` describes the situation where the width/viewport is at a minimum of `768px` or above.
- The laptop breakpoint `'laptop': '992px'` describes the situation where the width/viewport is at a minimum of `992px` or above.
- The desktop breakpoint `'desktop': '1200px'` describes the situation where the width/viewport is at a minimum of `1200px` or above.

## Code formatting using prettier

Prettier is used across this codebase for automated code formatting. You may be required to make some adjustments to your IDE to enable prettier support. By standardising code formatting we can make sure that code remains formatted consistently for all files for multiple developers thereby improving readability. If we decide to make changes to the code format we can do this in one place and have it applied across the entire project using prettier.

- The config files for prettier are stored in the root of this repo.
- The `.prettierrc.json` contains settings that can be changed as per our requirements.
- The `.prettierignore` contains a list of files and directories that should be ignored by prettier.

### Enable prettier in Visual Studio Code (VS Code)

- Ensure that you have followed the previous steps to install all packages using `npm install`
- You need to install the Prettier plugin from the VS Code extensions marketplace. You can do this by clicking on the extensions button and searching for Prettier then click on install.
- Go back and open any JSX file inside this codebase and press the keyboard shortcut `Cmd + SHIFT + P on macOS or CTRL + SHIFT + P on Windows`.
- Search for `Format Document` and hit enter. You may be asked to configure a default formatter, select `Prettier` as your default formatter.
- To enable format on save `Cmd + , on macOS, or CTRL + , on Windows` to open settings and search for `Format On Save` in the search box. Tick the checkbox to enable the setting to `Format on Save`.
- You can alternatively follow this guide for more help https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code

### Enable prettier in WebStorm/PHP Storm

- Ensure that you have followed the previous steps to install all packages using `npm install`
- See a list of all keyboard shortcuts in WebStorm here https://www.jetbrains.com/help/webstorm/mastering-keyboard-shortcuts.html
- Open settings by pressing `CTRL + ALT + S`. In MacOS this shortcut should be `Cmd + ,`. Alternatively in the `hamburger menu` click on `File > Settings`.
- In the search window search for `prettier`. Alternatively navigate to `Languages & Frameworks > JavaScript > Prettier`.
- Enable the option `Automatic Prettier configuration` and click the checkbox `Run on save`. You may need to restart your IDE for changes to apply.
- For a video guide you can follow this tutorial https://youtu.be/V3Sf4j-nevI?si=xN_Xwu3r9zha6G1m

### Manually run prettier using node

- Open the terminal and cd into the root of this project
- Run the command `npx prettier . --write` and prettier will automatically reformat all of the code in this project based on our settings and config files.

## Smallest supported devices

- Officially the smallest supported device is the iPhone SE iPhone SE (2nd generation) - 2020 or greater with the latest software updates. The screen width of this in pixels is `375px`.
- WebjetUI should work at `300px` as-well. Any lower width and the experience will be severely compromised.

## Design Decisions and Limitations

- This project uses Vite to bootstrap and build the React project. There are other tools available to do this like create react app etc.
- Docker compose was used to accommodate a growing code base. We can easily spin up other services/backends using the compose file compared to docker run.
- Project does not describe any fonts, font sizes, padding, margins, colours. To make estimates of these value I used various tools and technologies such as Figma combined with my best judgement where appropriate. For example the UI seems to be using the Roboto font which would also match with fonts used across webjet.com.au.
- At the time of developing React 19 has just been released. I still opted for React 18 as this has been used in the field for longer than the latest version which is helpful for the stability of the project. It will also be supported for quite some time before we need to upgrade.
- Certain components are not shown in the mock-ups e.g. filters section is not displayed in the mock-up for tablet and mobile. Best judgement is used when mock-up for components do not exist or are missing from a particular size display.
- Material UI (MUI) is a component library that was added to speed up app development. MUI contains prebuilt components that are performant and compliant with web standards.
- TailwindCSS is used to speed up development of the user interface. This fits well with the project since the code is split up into individual components.
- Hotel Star Rating System: Since a hotel could receive a decimal point rating e.g. `4.5 out of 5` stars a decision was made to treat the rating system as `X and up`. Here X becomes the lowest selected value. For example if the smallest checkbox selected is `2` then display all hotels with a rating of `2 or greater`. If no checkboxes are selected we would rather show the user all the hotels because we want to try to avoid the situation where no hotels are being displayed to increase conversions. When the smallest rating of 1 is selected, regardless of any other selections all hotels will be displayed that match the other filter criteria as the system adopts a `X & up` approach. Ideally this control would use a range slider to simplify its use and understandability to the end user.
- To communicate more information to a user certain UI elements may have been added e.g. rating system text which shows which hotels will be displayed.
- To communicate that no search results were found an interface appears to tell the user to search again using different keywords or filters.

## Config and Ignore Files

Most if not all of these files can be found in the root of this repository.

- `.dockerignore` - instructs docker to ignore certain files or folders when building the docker image.
- `.gitignore` - files and folders to be ignored by git so that they are not part of the repo.
- `.nvmrc` - file used by nvm to specify which version of node you are using for this project.
- `..prettierignore` - file used by prettier to ignore code formatting files or directories mentioned in this file.
- `.prettierrc.json` - this file contains configuration and settings used by the code formatter prettier.
- `compose.yml` - this file contains instructions for Docker containing the services we will use in our application.
- `Dockerfile` - instructions for Docker on how to build the docker image.
- `eslint.config.js` - this file is used by ESLint which is a tool that helps developers to catch errors in JS or code.
- `package.json` - contains a list of dependencies that are used by the application and can be installed using node.
- `postcss.config.js` - file used by PostCSS to process css files and allows us to optimize and enhance our css e.g. autoprefixing, minification.
- `tailwind.config.js` - file containing settings used by TailwindCSS a utility first CSS framework.
- `vite.config.js` - file containing settings used by Vite a modern build tool and development server for web applications.

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

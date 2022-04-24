Documenting progress:
12/08/2021 (Mac): 
    - /src/ folder
    - Created generic index.html
    - Created generic index.js
    - installed node from nvm (https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating)
        - (can also do this from a node installer)
        - had to create ~/.bash_profile file
        - MUST run source ~/.bash_profile to save
    - ran in CLI: nvm install node
    - ran in CLI within project: 'npm init' 
        - it proceeds to ask questions. hit enter for all
        - package.json is now created

01/03/2022 (Mac):
    - added <script src="index.js"> to index.html
    - installed Live Server extension to VS code
    - installed React to project with "npm install --save react react-dom"
    - uploaded project to GitHub with instructions (https://stackoverflow.com/questions/51997057/upload-local-repository-to-github-com)

01/17/2022 (Windows):
    - cloned and pulled in project from GitHub
    - downloaded gitbash CLI from https://git-scm.com/download/win
    - installed node from nvm (https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating)
        - had to create ~/.bash_profile file
        - MUST run source ~/.bash_profile to save
    - ran in CLI: nvm install node
    - ran in CLI within project: 'npm install' to download packages listed in package.json

01/19/2022 (Mac):
    - added a node sever.js file (https://stackoverflow.com/questions/38699493/send-a-index-html-file-when-server-is-created)
    - had to install express
    - added a react App.js structure
    - TODO: use webpack and babel instead of node for server and npm start script (https://stackoverflow.com/questions/57288079/syntaxerror-unexpected-identifier-importing-react-javascript)
    https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-nodejs-with-react-and-jsx?view=vs-2022

01/23/2022 (Mac):
    - Node.js Essential Training LIL - process (global module)

02/06/2022 (Mac):
    - Node.js Essential Training LIL - core modules

02/26/2022 (Mac):
    - Adding Typescript, Babel, Webpack to repo (https://codytechs.com/modern-web-development-with-typescript-babel-and-webpack/)
    - Webpack tutorial (INTERMEDIATE): https://linguinecode.com/post/how-to-setup-webpack-dev-server-react-babel
    - Webpack vs create-react-app (SIMPLE - wish i found this months ago!): https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/

02/27/2022 (Mac):
    - installed css-loader and style-loader and added them to webpack.config
    - added Dashboard and Banner React components

03/04/2022 (Mac) 3 hours:
    - fixed device height issue, added grid for banner, left panel, main content
    - subscribed to weather api

03/05/2022 (Mac) 3 hours:
    - dialed in weather api url calls
    - added lat/longs for 14ers

03/06/2022 (Mac) 4 hours:
    - converted js to jsx
    - added data table for 14er info
    - created Mountain class using OOP
    - added fetch call
    - added jest (TODO: configure transform)
    - TODO: create dev branch (move readme to a progress.md file)
    - Brandons idea: 'climbability score based on conditions' ex: Pikes peak in oct vs jan

03/12,13,17 (Mac) 5 hours:
    - tried and failed to understand Promise

03/31 (Windows) 1 hour:
    - worked with Aidan to learn more about await-async and fetch properties

04/23 (Mac) 4 hours:
    - resolved fetch issues with a componentDidMount() and a promise on <Table>
    - used axios.get() instead of fetch() SO THAT Jest now works

Questions:
    - sudo
    - .bash & .bashrc & .zshrc
    - PATH?
    - source
    - vi vs vim vs nano vs gedit
    - using scripts (npm run build)

#gitThroughThisTogether
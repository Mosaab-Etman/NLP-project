# NLP-project

#Description:
This project uses meaningCloud API to process and analyze the text, and produces a detailed multilingual sentiment analysis.

#Used technologies:
A) Webpack: to bundle file and do many other processes.
B) Dotenv: to secure the important variables like API key
C) Service Workers: to cache the tool and load it offline

#Scripts:
A) start: to run the application on the express server.
    * In your termina please type the command: "npm start", the project will be running on 'http://localhost:8081' 
A) build-dev: to run application using webpack dev server
    * In your termina please type the command: "npm run build-dev", the project will be running on 'http://localhost:8080'
b) build-prod: to build the dist folder
    * In your terminal please type the command: "npm run build prod", it will produce the 'dist' folder in the root of the project where will include the following:
    1. Minified Javascript file named as the following: main.[hash].js
    2. Minified CSS file named main.css
    3. Minified HTML file name index.html
    4. Images folder
    5. service worker files 

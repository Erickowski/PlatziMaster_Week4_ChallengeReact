#!/usr/bin/bash
git init
cat <<EOF >> package.json
{
  "name": "bash",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
EOF
git add .
git commit -m "Primer commit"
mkdir src
mkdir public
cd public
cat <<EOF >> index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
EOF
cd ..
cd src
mkdir assets
cd assets
mkdir static
mkdir css
cd css
cat <<EOF >> index.scss 
body {
    margin: 0;
    background-color: red;
}
EOF
cd ..
cd ..
mkdir components
cd components
cat <<EOF >> HelloWorld.jsx
import React from 'react';

const HelloWorld = () => (<h1>Hola mundo cruel</h1>);

export default HelloWorld;
EOF
cd ..
cat <<EOF >> index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import './assets/css/index.scss';

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
EOF
cd ..
git add . 
git commit -m "Estructura básica"
npm install react react-dom
touch .gitignore
echo "node_modules" >> .gitignore
git add .
git commit -m "Instalacion React"
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
cat <<EOF >> .babelrc
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
EOF
git add .
git commit -m "Instalacion Babel"
npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev
git add .
git commit -m "Instalacion SASS"
npm install webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server --save-dev
cat <<EOF >> webpack.config.js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
    ]
};
EOF
git add .
git commit -m "Instalacion Webpack"
code .
npm run start

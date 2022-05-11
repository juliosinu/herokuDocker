const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://thiago:thiago@cluster0-vnyql.mongodb.net/devradar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
   
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333
server.listen(PORT,()=>{
  console.log('Servidor rodando')
});

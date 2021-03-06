const express = require('express');
const server = express();
const cors = require('cors');
const connectToDB = require('./db');

//this is so incoming requests get parsed as json
//common to do
//easier to handle code wise
server.use(express.json());

//to handle CSRF (cross site request forgerery)
server.use(cors());

const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');

//all authentication routes
//for future cases
server.use('/api/auth', authRouter);

//all product routes
server.use('/api/products', productsRouter);

//invoke connect to DB function
connectToDB();

const port = process.env.PORT || 5000;

//starts the server on http://localhost:8000/
server.listen(port, '0.0.0.0', () => console.log('Server started...'));

// Importing express and routes
const express = require('express');
const fs = require('fs');
const apiroutes = require('./routes/apiroutes.js');
const htmlroutes = require('./routes/htmlroutes.js');
const { v4: uuidv4 } = require('uuid');


//Defining port number to process the server
const PORT = process.env.PORT || 3001;

// Calling express application
const app = express();

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting the middleware function
app.use(express.static('public'));
app.use('/api', apiroutes);
app.use('/', htmlroutes)


// Connecting server to port 3001 on localhost
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
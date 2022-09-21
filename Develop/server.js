const express = require('express');
// const path = require('path');
// const { clog } = require('./middleware/clog');
const apiroutes = require('./routes/apiroutes.js');
const htmlroutes = require('./routes/htmlroutes.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
// app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiroutes);
app.use('/', htmlroutes)
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
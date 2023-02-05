const express = require('express');
const dotenv = require ('dotenv').config();
const port = process.env.PORT

const app = express();

app.use('/api/transactions', require('./routes/transactionRoutes'))

app.listen(port, () => console.log(`server started on ${port}`))
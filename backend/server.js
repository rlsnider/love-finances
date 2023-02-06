const express = require('express');
const dotenv = require ('dotenv').config();
const port = process.env.PORT

const app = express();

app.use('/api/transactions', require('./routes/transactionRoutes'))
app.use('/api/payee', require('./routes/payeeRoutes'))
app.use('/api/accounts', require('./routes/accountRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))

app.listen(port, () => console.log(`server started on ${port}`))
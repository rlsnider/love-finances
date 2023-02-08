const express = require('express');
const dotenv = require ('dotenv').config();
const{ errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/transactions', require('./routes/transactionRoutes'))
app.use('/api/payee', require('./routes/payeeRoutes'))
app.use('/api/accounts', require('./routes/accountRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on ${port}`))
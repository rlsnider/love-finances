#Love my Finances

#.env file
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb+srv://rlsnider:hsk36600@cluster0.iiieso4.mongodb.net/finances?retryWrites=true&w=majority

##Views
1. Welcome/login page
User can login, create a user account, edit user account 
Welcome page will have instructions for getting started and nav bar
2. Transaction log. This is where the user logs transactions as they happen, will use timestamp option if user is adding transaction in real time, or option to insert date. The user will be able to insert accounts, payees and categories here if they want to. Main balances will be visable on this page, as well as balances by account, category or payee.
3. Accounts page. This is a list of your bank and credit card accounts that you will be tracking. Here you can add additional information about the account, and will be able to see the balance of your account.
4. Payee page. This will be a list of payee acounts. ie electric company, gas station, grocery store, etc. You will be able to see balances that have been spent/recieved by payee here.
5. category page. This is the beauty of this application. According to how detailed you want it, you can see how much you are spending on each category, clothes, gas, groceries, dining out, taxes, interest, etc.
    

Each page will offer all crud operations and Nav bar.

If I have time, I will add a budget report. Yearly report by month that shows a budgeted amount and an actual amount logging the differences in each category. 

Instructor Approved.

#Progress
##Routes
Set up first route to transactions on server and it didn't pass through Postman. Checking the url.
you have to have the full name in the url for postman, can't just have localhost:5000, has to be localhost:5000/api/transactions. All 4 CRUD operatioinss in transactionRoutes get status 200, do a commit.
##Controllers
set up first controller route with functions, export 4 CRUD functions at bottom of page, import to route page, delete the funcion off of the route and replace with the function name. 
check postman-- status 200 all good.
clean up transactionRoutes.js, make it dryer. 
check postman, all good. 
do commit.
##Set up routes and controllers for payees
set up routes and controllers for payees. add to server.js, check in postman, do commit.
##Set up routes and controllers for accounts and categories. 
don't forget to add to server.js. Check in postman, do commit.
##ERROR HANDLERS
Work with postman, in one of the routes that you'll be adding some text, like accounts(account name, etc), in the POST route, console.log(req.body). In postman, create a Post request and in the body, on the urlencoded line, create a key value pair, ie text: my first account name.
If you send the request, nothing happens, but if you do uncheck the key:value pair, there won't be req.body to display. (JS won't like it.)

Create an if statement from the console.log: const newAccount = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Create Account"})
    }
    replace your standard json message with the express error handler. Now your code breakes if you do not add a text field, but not to worry, go to middleware/errorMiddleware.js.
    construct an errorHandler which takes 4 arguments, err, req, res, next -
    with the variable called statusCode and create a ternary res.statusCode ? statusCode : 500. In other words, list the status code, but if that doesn't work list the 500 status code. respond with json, message: err.message, (set error message) the call the stack: but only if we are not in production. export you errorHandler, import it to server.js. Under the routes in server.js att app.use(errorHandler). This overrides the default express error handler. Add the error handlers to the other "POST" routes.
    check in postman and do a commit. Now it's time to add the data base.

    Before starting DB, set all controllers to "async". Also, install express-async-handler and wrap the function in the asyncHandler. That way you do not have to use the try/catch.
    
    ##CREATE DataBase
     organization name: milestone3
     project name: loveFinances
     DataBase user: rlsnider
     PW: hsk36600
     Created 5 collections, users, transactions, categories, payees, and accounts.
     connect to mongo Compass
     add connection string to .env file, with password and db file name inserted.
     create config dir in back-end with file named db.js.
     require mongoose, create an async function:
     const connectDB = async() => {
        try/catch...
     } (connects to the db and has a console log that is in red and underlined to show that connection was successful)
     






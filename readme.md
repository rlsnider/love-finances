#Love my Finances
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





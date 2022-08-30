# Simple server fot speroteck test task

It was a test task. So functionality is a bit specific and not complicated)

# Installation:
1. Copy folder
2. Open terminal in it
3. $ npm install
4. $ npm run build
5. $ npm run start

# API:

1. Rroute "/hello", method - GET. It takes a request with JSON object, for example:
{
    "name": "Tyson",
    "surname": "Pedro",
    "age": 88
}
Return JSON string. If age > 18. Send response: "Hello <name> <surname>".


2. Route "/users", method - POST.  It takes a request with JSON object with 4 parameters: email, name, surname, age, for example:
{
    "name": "Tyson",
    "surname": "Pedro",
    "age": 88,
    "email": "pedro@gmail.com"
}

If age > 18 it returns "Done!" if object saved to DB.


3. Ability to find all users by email. Send request with email. Return list of full names.

Rroute "/users", method - GET.  It takes a request with JSON object with required email field, for example:
{
    "email": "pedro@gmail.com"
}
Return JSON array, where every value - full name. If there is no email field - return list of all users.


4. Created node.js script that will call https://reqres.in/api/users API and generate .csv file with response data.
Headers [ID, Email, First Name, Last Name]

To generate csv you should send GET request to ghe route '/file'. In response you get list of all users from that API, and generated users.csv in ./dist folder with that list.
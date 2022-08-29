# Simple server fot speroteck test task

It was a test task.

# Installation:
1. Copy folder
2. Open terminal in it
3. $ npm install
4. $ npm run build
5. $ npm run start

My assignments were: 

1. Create nodeJS server on localhost. Create route and request with 3 parameters: name, surname, age. If age > 18. Send response: "Hello <name> <surname>".
I implement that with route "/hello", method - GET. It takes a request with JSON object, for example:
{
    "name": "Tyson",
    "surname": "Pedro",
    "age": 88
}
Return JSON string.


2. To previous server add another route and request with 4 parameters: email, name, surname, age. If age > 18 save email, name and surname in database(you can use any DB). Send response: "Done" if true, otherwise send error
I implement this with route "/users", method - POST.  It takes a request with JSON object, for example:
{
    "name": "Tyson",
    "surname": "Pedro",
    "age": 88,
    "email": "pedro@gmail.com"
}
Return "Done!" if OK, on an error.


3. Add ability to find all users by email. Send request with email. Return list of full names.

I implement this with route "/users", method - GET.  It takes a request with JSON object, for example:
{
    "email": "pedro@gmail.com"
}
Return JSON array, where every value - full name. If email do not specified - return list of all users.


4. Create node.js script that will call https://reqres.in/api/users API and generate .csv file with response data.
Headers should be - [ID, Email, First Name, Last Name]
To generate csv you should send GET request to ghe route '/file'. In response you get list of all users, and generated users.csv in ./dist folder with that list.
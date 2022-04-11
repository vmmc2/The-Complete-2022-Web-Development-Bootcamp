# Section 27 - Mongoose

## Intro
* Mongoose is a JavaScript package that works as an ODM (Object-Document Mapper). It'll allow your JS app to speak with your DB.
* It makes the process of developing with a database much easier and faster.

## Deleting a database
* In order to delete a specific database through the Mongo shell, you have to do the following:
  1. Inside the Mongo shell, switch to the database that you want to delete using the command ```use <database_name>```.
  2. After doing so, to delete the database, all you have to do is run the following command: ```dp.dropDatabase()```.

## How to use Mongoose
* First thing you have to do is install the __Mongoose__ package (inside your application folder) through the terminal: ```npm i mongoose```.
* After doing so, you must require this package inside your ```app.js``` file in the following way:
```javascript
const mongoose = require("mongoose");
```
* As the next step, you have to connect the database to your application:
```javascript
// Gereric case
mongoose.connect("mongodb://localhost:27017/<database_name>");

// Example
mongoose.connect("mongodb://localhost:27017/fruitsDB");
```
* __If you get a deprecation warning when running your application through node (or nodemon), make the following change in the piece of code that is responsible for connecting the application to the database server:__
```javascript
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});
```

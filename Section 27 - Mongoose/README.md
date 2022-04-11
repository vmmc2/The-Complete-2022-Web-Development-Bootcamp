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

## Creating a Schema, a Model and a Document
* The process needed to save a particular document inside a database is the following:
  1. __Create the schema related to the document.__
  2. __Create the model related to the document.__
  3. __Create the document and then save it inside the database.__
* Let's take a look at each step of the mentioned process...
#### 1) Creating a Schema
* A Schema just describes the structure that a certain type of document must have in order to be saved to a database. 
* It works like a blueprint that must be followed.
```javascript
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
```
* __For more info about the data types that a Schema can accept, take a look at the mongoose documentation.__
#### 2) Creating a Model
* A model has the responsability of creating a collection (table) and assigning a name to it, so we can access its documents later on. It also establishes the connection between the created collection (table) and the database.
* We must always provide the name of the table in singular. Mongoose is smart enough to pluralize it.
* Take a look at the example below in which we create a new model for our fruit schema:
```javascript
const Fruit = mongoose.model("Fruit", fruitSchema);
```
#### 3) Creating a document
* Now we create a document that obeys the structure defined inside the schema. 
* __The document is just an instance of the model. Therefore, it must have the same type as the model.__
```javascript
const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Pretty solid as a fruit."
});

fruit.save();
```
#### Challenge
```javascript
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Joe",
  age: 37
});
```

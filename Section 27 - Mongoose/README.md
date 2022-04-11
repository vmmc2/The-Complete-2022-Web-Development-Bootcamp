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

person.save();
```
#### Saving multiple documents inside a collection in Mongoose
* Mongoose provides a simple way of saving multiple documents at once inside a specific collection.
* To do so, all you have to do is use the method __```ModelName.insertMany([list_of_documents], callback);```__
* The callback is used to log errors if any occur.
* Take a look at the example below:
```javascript
const orange = new Fruit({
  name: "Orange",
  rating: 5,
  review: "Not so good!"
});

const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "Banana is the best fruit!"
});

Fruit.insertMany([orange, banana], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Everything went fine while saving the documents to the collection.");
  }
});
```

## Reading from your database in Mongoose
* Mongoose also provides a simple way of find specific documents of a collection.
* This is done via the find method. __This method has the following syntax: ```ModelName.find()```__
* This method can be called with two parameters: one parameter that works as a filter and another one that is a callback function __(Remember that callbacks are just functions that are triggered/called when the execution of a specific function is finished).__
* In the example below we have:
  * The method ```find()``` with only one parameter: The callback function, which has two parameters. The first parameter is the ```err``` parameter which receives possible errors that might have happened during the process of finding specific documents inside a collection. The second parameter is the ```fruits``` parameter which receives all documents found by the call to the ```find()``` method. Note that, in this scenario, we did not pass any filters as a parameter to the find function, so the call to this method will return every single document inside the ```fruits```collection.
```javascript
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    console.log(fruits);
  }
});
```

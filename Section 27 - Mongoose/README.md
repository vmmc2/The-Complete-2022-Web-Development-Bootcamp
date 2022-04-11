# Section 27 - Mongoose

## Intro
* Mongoose is a JavaScript package that works as an ODM (Object-Document Mapper). It'll allow your JS app to speak with your DB.
* It makes the process of developing with a database much easier and faster.

## IMPORTANT NOTE
* __Most of the methods presented here that interact with the data stored inside the database are methods related to the Mongoose Model class.__

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
  * The method ```find()``` with only one parameter: The callback function, which has two parameters. The first parameter is the ```err``` parameter which receives possible errors that might have happened during the process of finding specific documents inside a collection. The second parameter is the ```fruits``` parameter which receives all documents found by the call to the ```find()``` method. Note that, in this scenario, we did not pass any filters as a parameter to the find function, so the call to this method will return every single document inside the ```fruits``` collection.
```javascript
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    console.log(fruits);
  }
});
```
* __As a result, if everthing goes fine, the ```fruits``` object will just be an array of JavaScript objects (Fruit objects) that we can manipulate as we please inside our application.__
* __IMPORTANT: It's a good practice to close the connection between the application and its database once you've performed all the operations that you wanted to. This can be done by the following line of code:__
```javascript
mongoose.connection.close();
```

## Data Validation in Mongoose
* Mongoose provides a simple way of validating the data that we are trying to store (as a document) inside a collection of the database. 
* __This can be done by the use of Mongoose validators. It's important to mention that validators must be applied inside the schema. More documentations about validators can be found on the Mongoose website.__
* Take a look at the example below that shows how to use a simple validator:
```javascript
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    requred: [true, "Name of the fruit was not specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});
```

## Updating and Deleting data in Mongoose
* Again, I highly recommend that you take a look at the Mongoose documentation in order to understand better how things work in this framework. Specifically, take a look inside the API section.
* There are three different methods in Mongoose that can be used to update the documents of a collection. These methods are:
  * ```Model.update()```
  * ```Model.updateMany()```
  * ```Model.updateOne()```
* In the same way as we've seen above, in Mongoose there are two different methods that can be used to delete documents from a collection. Such methods are:
  * ```Model.deleteMany()```
  * ```Model.deleteOne()```

## Establishing Relationships and embedding documents in Mongoose
* The idea of establishing relationships and embedding documents in Mongoose is better explained with an example:
* __Let's say that we have two types of documents: one document represents a Person and another one represents a Fruit. Let's say that each person inside our ```people``` collection has a favorite fruit. How we would store this information? The answer is: by embedding a fruit document inside a person document. You'll find below a series of steps that must be followed in order to achieve this.__
```javascript
// We create the schema that refers to a Fruit. Then we must create the model that refers to a Fruit.

// Then, you must make a change to the Schema that represents a Person:
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

// Next step is to create the model that refers to a Person...

// Finally, you create a document of type Fruit. Then a document of type Person and in the field "favoriteFruit" you put the name of the fruit document that you have created.

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "So good!"
});

pineapple.save();

const person = new Person({
  name: "Amy",
  age: 23,
  favoriteFruit: pineapple;
});

person.save();
```

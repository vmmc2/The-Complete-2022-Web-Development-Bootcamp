# Section 26 - MongoDB

### Intro
* It's a good practice to read the documentation of a database before trying to work with it. __You should start by learning how to do the basic CRUD operations in a database.__

### How to use MongoDB in WSL
* First of all, open the terminal and write the following command: ```sudo mongod --dbpath ~/data/db```
* Once this is done, you should open another tab of terminal and then write the following command in order to access the MongoDB shell: ```mongo```
* After doing this, you will be ready to go.

### Useful commands to work with MongoDB shell
* ```help``` -> This command will show a list of the most useful commands that one can use when working with MongoDB shell.
* ```show dbs``` -> This command will show the names of all created databases. By default, MongoDB comes with 3 databases: "admin", "config" and "local".
* ```use <db_name>``` -> This command will create a new database and then switch to it. The created database will only appear on the ```show dbs``` output if it, actually, has data stored inside it.
* ```db``` -> This command will show the name of the current database that you are working with.
* ```show collections``` -> This command will show all collections in the current database.

## Useful comparison between MongoDB and SQL
* __Collections in MongoDB are equivalent to Tables in SQL.__
* __Documents in MongoDB are equivalent to Rows in SQL.__
* In MongoDB, each document represent a single data record.

## Create Operations
* There are 2 types of Create operations in MongoDB:
* ```db.name_of_collection.insertOne()``` -> This method will insert only one record inside a collection of a database. The argument that is passed is a JavaScript object that works like a document that will be inserted. Take a look at the example below:
```javascript
db.users.insertOne(
  {
    name: "Sue",
    age: 26,
    status: "pending"
  }
)
```
* ```db.name_of_collection.insertMany()``` -> This method will insert multipe records inside a collection of a database. The argument that is passed is a list containing several JavaScript objects that represent the documents to be stored in the database.

## Read Operations
* In order to do Read operations in MongoDB you must use the ```db.name_of_collection.find(query, projection)``` method, which, as you can see, has 2 optional parameters.
* If you don't provide any of these 2 optional parameters, then this method will return all documents that are inside the collection.
* The ```query``` parameter is used to impose constraints in order to select only the documents that satisfy those constraints. Such constraints must be passed in key-value pair format inside a JavaScript object. __In order to know how to apply this ```query``` parameter, you should take a look at the MongoDB documentation.__
* The ```projection``` parameter is used to restrict which key-value pairs of the document should be shown in the output. More details about it can be found in the documentation. __By default, the ```_id``` field will always be shown.__

## Update Operations
* MongoDB also has update operations that allow you to update the content of documents inside a collection of a database.
* The most common way of doing an update operation in MongoDB is by using the following method: ```db.name_of_collection.updateOne(query, modification)```
* The ```query``` parameter is used to impose constraints in order to select only the documents that satisfy those constraints. Such constraints must be passed in key-value pair format inside a JavaScript object. __In order to know how to apply this ```query``` parameter, you should take a look at the MongoDB documentation.__
* The ```modification``` parameter is used to tell the database which fields (key-value pairs) of the selected document(s) should be update and how the should be changed.
* __It's a good idea to take a look at the documentation of this method in the MongoDB website.__
* Example:
```javascript
db.products.updateOne({_id: 1}), {$set: {stock: 32}})
```

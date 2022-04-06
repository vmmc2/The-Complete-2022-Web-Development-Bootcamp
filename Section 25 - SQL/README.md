# Section 25 - SQL

## Intro
* Good source of documentation for SQL: __w3schools.__
* When dealing with SQL databases you must keep in mind that the most common operations that you are going to do are: __Create, Read, Update, Destroy (a.k.a CRUD).__
* All these 4 operations will be applied to the tables present in your database.

## SQL Keywords
### Creating a table in SQL (MySQL)
* In order to create a specific table inside a database you must provide: the name of the table, the name of the columns that are present in the table and the type of each column listed.
* The example below shows how to create a simple table:
```SQL
CREATE TABLE products (
  id INT, 
  name STRING, 
  price MONEY,
  PRIMARY KEY (id)
  );
```
* As you can see above, when creating a table in SQL we have to specify what column of the table will work as a primary key. __Remember that a primary key is just a column which values will be used to uniquely identify the records of a table.__

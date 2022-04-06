# Section 25 - SQL

## Intro
* Good source of documentation for SQL: __w3schools.__
* When dealing with SQL databases you must keep in mind that the most common operations that you are going to do are: __Create, Read, Update, Destroy (a.k.a CRUD).__
* All these 4 operations will be applied to the tables present in your database.

## Common operations in SQL
### Creating a table in SQL (MySQL)
* In order to create a specific table inside a database you must provide: the name of the table, the name of the columns that are present in the table and the type of each column listed.
* The example below shows how to create a simple table:
```SQL
CREATE TABLE products (
  id INT NOT NULL, 
  name STRING, 
  price MONEY,
  PRIMARY KEY (id)
  );
```
* As you can see above, when creating a table in SQL we have to specify what column of the table will work as a primary key. __Remember that a primary key is just a column which values will be used to uniquely identify the records of a table.__
* We can also define constraints in the table that, if not met, will not allow the creation of a specific record inside the database. One of the most common examples is the ```NOT NULL``` one. This one, as its name suggests, will not allow the creation of a record if the value of a specific column is __NULL.__

### Inserting a record into a table in SQL (MySQL)
* There is more than one possible way to insert data (a record) into a table in SQL. For now, we will be focusing in the simplest one.
* Its syntax is:
```SQL
INSERT INTO target_table_name
VALUES (value_of_column1, value_of_column2, value_of_column3, value_of_column4, ...)
```
* Let's say, for example, that we want to insert a record that represents a pen, that costs US$ 1.20, inside our products table. The code snippet below shows a way of doing so:
```SQL
INSERT INTO products
VALUES (1, "Pen", 1.20)
```
* __It's important to mention that the values passed inside ```VALUES (...)``` must be in the same order of the values of the created table (product).__
* __An important scenario appears when we don't have all the values for a specific record and we want to store this same record inside our table. We must do so in a different way. In order to do so, you must specify for which columns you already have the values. Take a look at the code snippet and the example below:
```SQL
INSERT INTO target_table_name (column1_name, column4_name)
VALUES (value_column1, value_column4)
```
```SQL
INSERT INTO products (id, name)
VALUES (2, "Pencil")
```

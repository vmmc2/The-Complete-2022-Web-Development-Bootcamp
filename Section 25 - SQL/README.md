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
* __An important scenario appears when we don't have all the values for a specific record and we want to store this same record inside our table. We must do so in a different way. In order to do so, you must specify for which columns you already have the values. Take a look at the code snippet and the example below:__
```SQL
INSERT INTO target_table_name (column1_name, column4_name)
VALUES (value_column1, value_column4)
```
```SQL
INSERT INTO products (id, name)
VALUES (2, "Pencil")
```
* __The missing values will be filled with NULL.__

### Reading data (record) from a database (SQL/MySQL)
* The most common way of doing so is by using the keyword __SELECT.__
* Let's take a look on the most common cases of reading data from a table in SQL
#### Case 1: Reading (getting) all columns of a table in SQL.
* Syntax:
```SQL
SELECT * FROM table_name;
```
* Example:
```SQL
SELECT * FROM products;
```
#### Case 2: Reading (getting) only some columns of a table in SQL.
* Syntax:
```SQL
SELECT column1_name, column2_name FROM table_name;
```
* Example:
```SQL
SELECT name, price FROM products;
```
#### Case 3: Reading the content of a particular row of a table in SQL.
* Syntax:
```SQL
SELECT * FROM table_name WHERE condition
```
* Example:
```
SELECT * FROM products WHERE id=1
```
* __If you navigate through w3schools website you will find many examples of operators that can be used inside the condition of a WHERE keyword in SQL.__

### Updating a table in SQL (MySQL)
* There are 2 particular cases when it comes to updating a table in SQL.
#### Case 1: Updating the values of certain columns of specific records that obey a certain condition
* Let's say you want to update/change the value of some columns in a table. How would you do that?
* Below, we have a generic code snippet that shows how to do so and also an example:
* Syntax:
```SQL
UPDATE target_table_name
SET column1 = value1, column2 = value2, ...
WHERE condition
```
* Example:
```SQL
UPDATE products
SET price = 2.00
WHERE id=1
```
#### Case 2: Adding, updating or destroy columns of a certain table in SQL
* In this case, what we need to do is to __ALTER__ the table.
* We are going to cover only the operation responsible for adding new columns to a specific table in SQL. If you want to learn more about the other types of operations, take a look at w3schools.
* Below, we have the code snippet and the example related to addition of a new column to a table in SQL.
* Syntax:
```SQL
ALTER TABLE target_table_name
ADD new_column_name data_type
```
* Example:
```SQL
ALTER TABLE products
ADD stock INT
```

### Deleting data (certain records) in SQL (MySQL)
* Let's say you want to delete/destroy certain records of table in SQL. How can you do that?
* Below, you can find both a code snippet and an example that show you how to do so.
* Syntax:
```SQL
DELETE FROM target_table_name
WHERE condition
```
* Example:
```SQL
DELETE FROM products
WHERE id = 1
```
* __Pay attention: If you don't provide a condition in the DELETE command, it will delete all the data present in the target table.__

### Relationships, Foreign Keys and Inner Joins in SQL(MySQL)
* In SQL, we can create relationships between the tables of the database by using foreign keys.
* __Formally, a foreign key is a key that is used to link to tables together. A foreign key is a field/column (or collection of fields/columns) in one table that refer to the primary key in another table.__
* __The table containing the foreign key is called the child table whereas the candidate key is called the parent table.__ 
* Take a look at the example below in which we create a new table called "orders" that will create a link between the "products" table and the "customers" table:
* __```orders``` table:__
```SQL
CREATE TABLE orders(
	id INT NOT NULL,
  	order_number INT,
  	customer_id INT,
  	product_id INT,
  	PRIMARY KEY (id),
  	FOREIGN KEY (customer_id) REFERENCES customers(id),
  	FOREIGN KEY (product_id) REFERENCES products(id)
);
```
* __```customers``` table:__
```SQL
CREATE TABLE customers(
	id INT NOT NULL,
  	name STRING,
  	address STRING,
  	PRIMARY KEY (id)
);
```
* __```products``` table:__
```SQL
CREATE TABLE products(
	id INT NOT NULL,
  	name STRING,
  	price MONEY, stock INT,
  	PRIMARY KEY (id)
)
```
* The power of linking tables and creating new ones that represent the relation between two or more tables reside in the keyword __JOIN.__
* There are several types of __JOIN__, each of them is useful for a different case. To find more info about each type of __JOIN__, visit __w3schools.__
* For now, we will focus on the __INNER JOIN.__
* Syntax:
```SQL
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

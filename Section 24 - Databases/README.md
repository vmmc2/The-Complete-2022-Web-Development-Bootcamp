# Section 24 - Databases 

## Intro
* Usually, databases are classified in two different types: __SQL(Structured Query Language)__ and __NoSQL(Not only Structured Query Language).__
* We also refer to them as __Relational Databases (SQL)__ and __Non-relational Databases (NoSQL).__
* The most common examples of SQL databases are: __MySQL__ and __PostgreSQL.__
* The most common examples of NoSQL databases are: __MongoDB__ and __Redis.__

## Differences between and SQL and NoSQL
* SQL databases normally store the data in tables, much like Excel spreedsheats.
* SQL databases are known to be very inflexible due to the fact that the data is stored in a table format. For example, if some rows (instances) of a table don't have a specific info (a column), then the SQL database is going to fill the gap with __NULL__ and, as we've seen previously, dealing with __NULL__ values is pretty dangerous, specially if you're a not expecting the value of something to be __NULL__.
* Even though we can add columns to a table in a SQL database this, usually, is not so cool because the table is going to become pretty irregular.
* __We don't have this problem when dealing with NoSQL databases because in this type of databases, the data is represented in a JSON format. So, we don't really need to care about the structure/format of the data.__
* SQL databases are pretty good at establishing relationships between its tables (data) whereas NoSQL is not so good when providing this convenience.

## Which one to choose? SQL or NoSQL?
* __If your the data you are dealing with has lots of relationships of different types (one-to-one, one-to-many, many-to-many), then it's better to stick to a SQL database.__
* __On the other hand, if you are dealing with data that lack relationships or that has one-to-many relationships as its major type of relation, then stick to a NoSQL database.__
* __When it comes to scalability, a NoSQL database is a better choice than a SQL database. NoSQL databases allow the creation of distributed databases, which are going to scale better on the long term.__

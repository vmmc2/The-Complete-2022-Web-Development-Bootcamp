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

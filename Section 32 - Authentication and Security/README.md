# Section 32 - Authentication and Security

## Level 1 - Username and Password
* This is the lowest possible level of security that a web application can have.
* It basically consists of storing the username and the password of the user inside the database without applying any kind of encryption to it.
* In order to do so, we will need to create an user schema and an user model in our database.
* But by applying this strategy, we leave our database unprotected since we are not applying any type of hashing or security method to the stored passwords.

## Level 2 - Database Encryption
* Encryption is, in simple words, just a way to make information more secure. Basically, we are just scrambling an original piece of information with the use of a key and, by doing so, any other person will be able to get the content of the original piece only if he/she has the same key used for scrambling.
* There are popular algorithms used for encryption and decryption. One of the most famous is the __Caesar Cipher.__ (Nowadays, this algorithm is considered very simple and can be cracked very easily).
* On this level, we are going to use a npm package called __```mongoose-encryption```__. This package use a much more reliable encryption algorithm called __AES-256__. Its worth mentioning that this package provides two functionalities: __encryption and authentication.__
* Below you will find the steps that are taken by this package in order to encrypt and decrypt data:
  * First of all, you must include this new package in your web application project. This can be done by simply writing the following line of code inside your ```app.js``` or ```index.js``` file:
  ```javascript
  const encryption = require("mongoose-encryption");
  ```
  * After doing so, you must define a new string (which will be called ```secret```). This string will be used in order to encrypt the desired content inside our database:
  ```javascript
  const secret = "ThisIsAnExampleOfSecret";
  ```
  * After doing so, we must add this new functionality of secrets to the schemas that we want to secure/protect. This can be done by using a specific method called ```plugin``` (I highly recommend you to take a look at its documentation in the mongoose-encryption website).
  ```javascript
  userSchema.plugin(secret, encryptedFields: ["password"]);
  ```
  * __And that's it. The ```mongoose-encryption``` package works in such way that it encrypts the required fields of a document when we save it and it decrypts its content when we are trying to find a specific document.__

## Intermission 1 - Environment Variables in order to keep Secrets safe
* __Environment Variables are just a safe way of storing sensitive information. Usually, these environment variables are stored inside a specific file.__
* In order to do so, we can use a package called __```dotenv```.__
* First of all, you must install this package through npm: ```npm install dotenv```.
* After doing so, you must require and configure this package as soon as possible inside your project by writing the following line of code at the very top of your ```app.js``` or ```index.js``` file:
```javascript
require("dotenv").config();
```
* The first thing you need to do in order to use environment variables is create a new file called ```.env``` in the root directory/folder of your project.
* Then, add environment-specific variables on new lines in the form of ```NAME=VALUE``` (The name of the variable must be in uppercase and follow snake_case convention):
```
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```
* After defining the environment variables, you can refer to them inside your JS code by using the following convention:
```javascript
console.log(process.env.ENVIRONEMNT_VARIABLE_NAME);
```
* __IMPORTANT: DO NOT FORGET TO PUT YOUR ```.env``` FILE INSIDE YOUR ```.gitignore``` FILE. There are several templates for Node.js in GitHub.__

## Level 3 - Hashing Passwords

## Level 4 - Salting and Hashing Passwords with bcrypt

## Intermission 2 - Cookies and Sessions

## Level 5 - Passport.js

## Level 6 - OAuth 2.0

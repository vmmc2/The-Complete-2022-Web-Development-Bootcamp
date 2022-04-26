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

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
* __Heroku has its own way of storing environment variables which involves the use of a dashboard to do so.__

## Level 3 - Hashing Passwords
* The idea behind Hashing is more complex (and also more secure) than the idea behind encryption/decryption.
* __The whole problem with encryption and decryption is that, even though one can generate a very complex encryption/decryption system, such system will be dependent of a key, that is used to retrieve the original content from a encrypted messsage.__
* __This means that a hacker, with enough free time, might be able to discover the key and then compromise our whole system.__
* __But how Hashing solve this problem? The process of Hashing consists of applying a Hashing function to the original message. Through this process, we obtain a hash as a result. But you might ask yourself "How do we get the original content back?" and I answer you "That's the neat part. You don't". Hashing functions are one-way only. This means that we can take an original message and get its hash but not the other way around.__
* __In order to check if a user entered the correct password, we do not check the original content of the password. We chech the obtained hashes from the Hashing of the password.__
* __In order to deal with this new level of security, we must use a new JS package called md5. This package can be installed through the command line by the following command: ```npm install md5```.__

## Level 4 - Salting and Hashing Passwords with bcrypt
* Salting is just Hashing taken to the next level.
* As we've seen previously, the process of hashing consists of just applying a Hashing function to an original string in order to generate a Hash.
* __Salting works different because it also adds a random set of characters (called Salt) to the original string before applying the Hashing function. This results in a much more secure system.__
* __The user doesn't need to remember the Salt. It's also worth mentioning that the Salt is stored inside the database along with the Hash.__
* We can also make our system more secure by using a more complex Hashing algorithm. As an example, the bcrypt hashing algorithm is more complex than the md5 hashing algorithm.
* __Another important concept that comes into play in this scenario is the concept of Salt rounds. The whole idea behind it basically consists repeating the process of appending salts to a string and then applying a Hashing function to it.__
* In order to deal with this new level of security, we must use a new JS package called __bcrypt.__
* You can install bcrypt through the command line by simply running the following comamnd: ```npm install bcrypt```.

## Intermission 2 - Cookies and Sessions
* Cookies are just a tool used by companies to save information about users that visit their website and take some type of actions inside it.
* It's more easy to explain what cookies are and how they work by using an example:
  * Let's say you want to buy a Nintendo Switch at Amazon. The first thing you do in order to buy the console is visit their website. So, at this moment, you send a __GET__ request to the Amazon website.
  * Their server responds to your request by sending the HTML, CSS and JS files that must be rendered inside your browser. After navigating inside this website, you decide to finally buy the Switch. You put it in your cart (This is equivalent of doing a __POST__ request). Then, the Amazon server responds to this request and also sends a cookie (which will store information about this user's session: In this case, the Amazon server wants to store/remember the fact that the user put a Switch inside the cart). Let's say that, for some reason, you don't finish your purchase and leaves Amazon's website. 
  * Let's say that on next day, I go again to the Amazon website. However, this time, I will not only send a __GET__ request but also send the cookie that is in my browser. When both of them arrive at the Amazon server, the server will analyze the cookie for previous user sessions inside it.
  * __There are different types of cookies. On this module we are going to study cookies that store sessions information. A session is just a period of time in which a browser interacts with a server.__
  * The package that we are going to use to implement this type of functionality is called: __Passport.js__.

## Level 5 - Passport.js

## Level 6 - OAuth 2.0

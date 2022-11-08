# Section 22 - EJS

### Intro
* EJS stands for Embedded JavaScript. It's a npm package that, once installed, allows us to create template files in order to display the server logic (in HTML files) to the browser.
* In order to install EJS on your project, you must open your terminal in your project's folder and run the following command:
```
npm install ejs
```
* After doing so, you have to "say" to your app that its view engine is going to use EJS. To do so, you must write the following inside ```app.js``` or ```index.js```:
```javascript
app.set("view engine", "ejs");
```
* Once you are done, you can start using EJS as your view engine.

### Using EJS and Templates
* First of all, you are not going to display the content in the browser using ```.html``` files anymore. Instead, you are going to use ```.ejs```. __It's important to mention that everything that you can do in HTML you can also do with EJS.__
* __You must also keep in mind that EJS expects that the ```.ejs``` files of your app will be stored in a folder called ```views``` (this folder is one level below in hierarchy to your app folder).__
* __You can pass the data from your server to a specific ```.ejs``` file that will be displayed to the browser in the following way:__
```javascript
let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.listen(3000, function(){
  console.log("The server is running on port 3000!");
});

app.get("/", function(req, res){
  res.render("index", {foo: "FOO"});
});
```
* As you can see above, you will not use the methods ```res.send()``` or ```res.sendFile()``` anymore. __Instead, to work with EJS, you must use a new method called ```res.render()```. This method receives two parameters. The first one is the name of the ```.ejs``` file that will be displayed to the browser and the second parameter is a JSON that contains key-value pairs representing variables and their respective values that are going to be displayed inside the ```.ejs``` file.__
* __In a ```views``` file, you can render the value of a variable passed by the server by using the following syntax:__
```HTML
<%= variable_whose_value_you_want_to_show %>
```
* __You can also run simple Javascript code inside an ```.ejs``` file. In order to do so, you must use a different notation which is shown below. This notation must enclose every single JS line present inside the ```.ejs``` file.__
```HTML
<% line_of_JS_code %>
```

### Passing data from the browser to the server
* The most common way of passing data from the client side (i.e the browser) to the server side (i.e the server) is by using forms with __POST__ request. By doing so, the data that we passed to the server will be available inside the ```app.post()``` methods. There, we can save then into variables (local or global) and then pass those variables through the use of the ```res.redirect()``` method.
* Even though we said above that we can use global variables, this is not the best way of addressing this type of problem. There is a better way of passing data through routes which we will see soon.

### Scope in JavaScript
* In this section, we will analyze the difference between variables that are declared using the following keywords: ```var```, ```let``` and ```const```.
#### With respect to immutability
* As we've already seen previously:
  * __Variables declared using the ```const``` keyword cannot have its value changed latter in the code.__
  * __Variables declared using the ```var``` or the ```let``` keyword can have its value changed latter in the code.__
#### With respect to scopes
* If the variable is declared inside a function:
  * ```var``` -> Local
  * ```let``` -> Local
  * ```const``` -> Local
* If the variable is declared outside a function:
  * ```var``` -> Global
  * ```let``` -> Global
  * ```const``` -> Global
* If the variable is declared inside a different type of scope (```if/else```, ```if/elseif/else```, ```while```, ```for```, ```do-while```):
  * ```var``` -> Global
  * ```let``` -> Local
  * ```const``` -> Local
* __Good Practice: AVOID USING ```var```. USE ```let```.__


### href and GET request
* __Clicking on a specific HTML element that has a ```href``` attribute that links to another page has the same of effect of executing a GET request to the said page.__

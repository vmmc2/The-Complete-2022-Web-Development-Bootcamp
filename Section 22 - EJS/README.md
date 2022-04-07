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
* 

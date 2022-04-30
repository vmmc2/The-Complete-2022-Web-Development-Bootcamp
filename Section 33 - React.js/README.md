# Section 33

## Intro
* To learn React.js, we will use an interactive tool called Code Sandbox.

## Introduction to JSX and Babel
* First thing we have to keep in mind is that React.js works by creating and connecting components in a tree structure (as we did in Flutter).
* Each component usually has 3 files associated to it: a HTML file (which defines its structure), a CSS file (which defines its style) and a JS file (which defines its funcionality).
* These files usually have the following name convention:
  * index.html
  * styles.css
  * index.js
* To work with React.js, you must install two JS packages through NPM in the command line. These packages are:
  * ```react```
  * ```react-dom```
* After doing so, we must require these two packages in our ```index.js``` file using the following code snippet:
```javascript
const React = require("react");
const ReactDOM = require("react-dom");
```
* Another thing that we must keep in mind is that inside our ```index.html``` file we have a structure very similar to a normal HTML file. __The one thing worth mention is that in the body tag of this HTML file, we must always have a ```<div></div>``` tag with ```id="root"```. This is the root component of our application. Every other component that we might want to render in our application must be inside this div element.__
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/javascript"></script>
  </body>
</html>
```
* Inside the ```index.js``` file, we have a specific React method that will allow us to render more components inside our app. This method is called ```render``` and it has the following syntax:
```javascript
ReactDOM.render(WHAT YOU WANT TO SHOW, WHERE YOU WANT TO SHOW IT, OPTIONAL CALLBACK);
```
* Below you can find a better example that shows what React.render actually does:
```javascript
ReactDOM.render(<h1> Hello World </h1>, document.getElementById("root"));
// Basically, this method is going to render the <h1> Hello World </h1> element inside the element that has an id="root".
// This is done through the use of a JS compiler called "Babel". That translates HTML code to JS code. Babel translates this to a version of JS code that can be understood by any browser.
```
* __IMPORTANT: It's worth mentioning that the ```ReactDOM.render()``` method can only take one HTML element as the first parameter. However, remember that we can combine different HTML elements to get only one HTML element by using the ```<div></div>``` tag. Take a look at the examples below to understand this idea better:__
  * This is not a single HTML element:
  ```javascript
  ReactDOM.render(<h1> Hello World </h1> <p> This is just a paragraph </p>, document.getElementById("root"));
  ```
  * This is a single HTML element (even if it's a complex one):
  ```javascript
  ReactDOM.render(
    <div>
      <h1> Hello World </h1>
      <p> This is just a paragraph. </p>
    </div>,
    document.getElementById("root")
  );
  ```

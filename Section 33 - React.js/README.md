# Section 33

## Intro
* To learn React.js, we will use an interactive tool called Code Sandbox.

## How to run a React project?
* When dealing with React projects made by yourself or by others you must likely will need to run it locally in order to test your code and debug.
* If you have already installed the required packages, all you need to do is run the following command inside your project directory in the terminal:
```
npm start
```
* However, if you downloaded the project directory from third-party you need to run the following commands inside the project directory in the terminal:
```
npm install
npm start
```

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
  * __This is not a single HTML element:__
  ```javascript
  ReactDOM.render(<h1> Hello World </h1> <p> This is just a paragraph </p>, document.getElementById("root"));
  ```
  * __This is a single HTML element (even if it's a complex one):__
  ```javascript
  ReactDOM.render(
    <div>
      <h1> Hello World </h1>
      <p> This is just a paragraph. </p>
    </div>,
    document.getElementById("root")
  );
  ```

## JavaScript Expressions in JSX and ES6 Template Literals
* If you create JS variables (by using ```const```, ```let```, ```var```) and want to put the value of these variables inside the HTML file (changed by the ```ReactDOM.render()``` method), all you need to do is to enclose the variable with {}. 
* Not only that, you can put __JavaScript expressions inside {}. However, you cannot put JavaScript statements inside {}, since this is going to raise errors.__
* You can see an example below:
```javascript
import React from "react";
import ReactDOM from "react-dom";

const myName = "Victor";

ReactDOM.render(<h1> Hello there, {myName}! </h1>, document.getElementById("root"));
```

## Observation
* When dealing with React, you must change the type of your script from ```text/javascript``` to ```text/JSX```.

## JSX Attributes and Styling React Elements
* As we have done previously with pure HTML and CSS, we can also style our HTML elements using React.
* We can put our CSS styles inside some classes or ids in the ```styles.css``` and the reference those classes and ids in the HTML file. However, when dealing with classes in React, we must use a different attribute called ```className``` instead of the attribute ```class```.
* Furthermore, when dealing with React, every attribute name must use __camelCase.__
* Just because we are learning a new technology (namely React) it does not mean that the things that we've learned previously are not valid anymore. 
* __When it comes to styling in React, the best practice to do so is to use the ```className``` attribute and create different styles inside the ```styles.css``` file.__

## Inline Styling for React Elements
* There's also another way of styling your React elements. However, it's important to mention that this is not the recommended way according to the React documentation.
* In this way, we put the styling directly inside the HTML file. To be more specific, we put the styling inside the ```style``` tag of any HTML element.
* There are some differences that you must keep in mind when doing so. JSX requires that the value of the ```style``` attribute must be a JS object and not a string (as we could think since we've done this way when dealing with pure HTML).
* The example below shows how to properly use inline styling for React elements:
```javascript
import React from "react";
import ReactDOM from "react-dom";

const styling = {
  color: "red" //The value must be of type String and the keys must be in camelCase.
};

ReactDOM.render(
  <h1 style={styling}> Hello World! </h1>,
  document.getElementById("root")
);
```

## React Components
* React components is a React feature that allows us to structure our code in a more organized way. Moreover, it also allows us to reuse code blocks.
* __In order to create a simple React component you need to create a function and make this function return a HTML element. It's important to mention that you need to name your function using a variation of camelCase (all words must be capitalized). After creating this function and making it return a HTML element, all you need to is reference this function inside your HTML file.__
* __Take a look at the example below in order to better understand this concept.__
```javascript
import React from "react";
import ReactDOM from "react-dom";

function Heading(){
 return <h1> My favourite foods </h1>;
}

ReactDOM.render(
 <div>
  <Heading></Heading>
  <ul>
   <li> Pizza </li>
   <li> Quesadilla </li>
   <li> Cookies </li>
  </ul>
 </div>,
 document.getElementById("root")
);
```
* However, we can structure our code better. In order to do so, we must create individual files for each React component that we create. 
* __Following the React/JSX convention, the name of the file must be equal to the name of the function. Furthermore, the extension of such file must be ```.jsx```.__
* __It's also worth mentioning that such files are usually created in the same folder as the initial JS file (```index.js```).__
* __Applying these concepts in the example below, we would have two files in the same folder: ```index.js``` and ```Heading.jsx```.__
* __```Heading.jsx```__
```javascript
import React from "react";

function Heading(){
  return <h1> My Favourite Foods </h1>;
}

export default Heading;
```
* __```index.js```__
```javascript
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading.jsx"; // Could be just "./Heading"

ReactDOM.render(
  <div>
    <Heading></Heading>
  </div>
  document.getElementById("root")
);
```

## JavaScript ES6 - Import, Export and Modules
* __A module is just a separate file that contains some piece of code that can be used elsewhere inside a project. Usually, we create a file and export its content so other files can import this created file and then use its content.__
### Importing/Exporting just one piece of code from the module (file)
* As an example, let's say that we create a module (file) that contains only one piece of code (could be a variable/constant or a fuction):
* __```math.js```__:
```javascript
const pi = 3.14159;

export default pi;
```
* Now let's suppose that we want to use this module inside another file that is inside the same folder of ```math.js```.
* __```index.js```__:
```javascript
import React from "react";
import ReactDOM from "react-dom";
import pi from "./math.js"; // We could use any other name instead of "pi". The chosen name would refer to the constant "pi" defined inside the math.js file/module.

...
```
### Importing/Exporting more than one piece of code from the module (file)
* How should we proceed if we want our module to have more than just one piece of code (several functions and/or several constants)?
* __```math.js```__:
```javascript
const pi = 3.14159;

function doublePi(){
 return 2 * pi;
}

function triplePi(){
 return 3 * pi;
}

export default pi;
export {doublePi, triplePi};
```
* __```index.js```__:
```javascript
import React from "react";
import ReactDOM from "react-dom";
import pi, {doublePi, triplePi} from "./math.js"; //For the default export, you can use any name. However, for the other exports, you must use the same name

ReactDOM.render(
 <ul>
  <li> {pi} </li>
  <li> {doublePi()} </li>
  <li> {triplePi()} </li>
 </ul>
 document.getElementById("root")
);
```
### Importing/Exporting everything from the module (file)
* What we must do in order to import everything (every piece of code) from the module (file)?
* __```math.js```__:
```javascript
const pi = 3.14159;

function doublePi(){
 return 2 * pi;
}

function triplePi(){
 return 3 * pi;
}

export default pi;
export {doublePi, triplePi};
```
* __```index.js```__:
```javascript
import React from "react";
import ReactDOM from "react-dom";
import * as math from "./math.js"; // We could use any other name instead of "math".

ReactDOM.render(
 <ul>
  <li> {math.default} </li>
  <li> {math.doublePi()} </li>
  <li> {math.triplePi()} </li>
 </ul>
 document.getElementById("root")
);
```

## React Props
* This is also called __React Properties.__
* __This is a feature provided by the React framework that allows us, developers, to reuse components.__
* To be more specific, let's say that you have created a component named Card that has info about dogs. Each Card should represent a different dog and, thus, every single one of them should display unique info. With the knowledge that we have right now, doing so will be pretty repetitive. In these types of scenario, React props comes to our rescue.
* __React props allows us to pass some parameters (in the form of a JS object) that will be used inside the component. You can think of this as the same as creating an object of a class.__
* The code snippet shown below will make things more clear:
```javascript
import React from "react";
import ReactDOM from "react-dom";

function Card(props){ // The parameter props is a JS object that will contain different attributes whose values will be used by the component.
 return (
  <div>
   <h2> {props.name} </h2>
   <img src={props.img} alt="avatar_img" />
   <p> {props.tel} </p>
   <p> {props.email} </p>
  </div>
 );
}

ReactDOM.render(
 <div>
  <h1> My contacts </h1>
  <Card
   name="Victor"
   img="https://www.umaurlqualquer.com"
   tel="4002-8922"
   email="test123@email.com"
  />
 </div>,
 document.getElementById("root")
);
```

## React DevTools
* This is a very useful extension that can be installed inside Chrome or Firefox that allows us to view the ReactDOM. It's very similar to the normal DOM.
* It allows us to view the structure of our app and also the data that is stored inside every component inside it.

## Mapping Data to Components
* In order to render several components of the same type, we need to use some strategy.
* In these scenarios we can use a ```for loop``` or the ```map``` method. It's recommended to use the ```map``` method since it's considered more legible.
* __But how the ```map``` method works? It works by being applied to an array/list as one of its inputs. Its only input is a function that is going to be applied to every element that is inside the array/list.__
* The code snippet below will make things more clear:
```javascript
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact){
  return (
  <Card
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
```
* __IMPORTANT: When dealing with repeated components, the component blueprint must have a field called "key". The value of this field for repeated components must be unique for each component. The "key" field can have a value of type int or type string. This is a property that is not supposed to be used by us, developers. It only serves to be purpose of being used to make repeated React components unique.__

## Useful JS Methods (Map, Filter, Reduce)
#### Map
* __As we've seen previously, this method is applied to an array and executes a transformation on each element inside the array and then returns a new array containing these transformed elements.__
* __The only parameter that this method receives is the name of the function that is going to be executed on each element of the array.__
* The code snippet below shows how to use this method:
```javascript
const numbers = [1,2,3,4,5];

function double(number){
 return (2*number);
}

const newNumbers = numbers.map(double); // [2,4,6,8,10];
```
#### Filter
* __As the name suggests. This method filters some elements from the given array. It receives a function that returns true or false as its only parameter and only keep inside the array the elements that return true.__
* __This method also returns a new array.__
```javascript
const numbers = [1,2,3,4,5];

function isEven(number){
 if(number % 2 === 0){
  return true;
 }else{
  return false;
 }
}

const evenNumbers = numbers.filter(isEven); // [2,4];
```
#### Reduce
* __This method accumulates a value by executing some action/transformation to each item inside the given array.__
* __This method also returns a new array.__
* __This method receives an anonymous function that must have two parameters: The first parameter is a variable that is going to be used as the accumulator. The second parameter is the current element inside the array to which we can perform some transformation.__
```javascript
const numbers = [1,2,3,4,5];

const sumOfNumbers = numbers.reduce(function(accumulator, currentNumber){
 return accumulator + currentNumber;
});

// sumOfNumbers = 15;
```
#### Find
* __This method is responsible for finding (and returning) the first item that matches something inside the given array.__
* It receives a function as its only parameter. The said function also has only one parameter which is the current element of the array that is being tested in order for us to check whether we have a match or not.
```javascript
const numbers = [1,2,3,4,5];

const foundNumber = numbers.find(function(number){
 return number > 2;
});

// foundNumber = 3;
```
#### FindIndex
* __This method is responsible for finding (and returning) the index of the first item that matches something inside the given array.__
* It receives a function as its only parameter. The said function also has only one parameter which is the current element of the array that is being tested in order for us to check whether we have a match or not.
```javascript
const numbers = [1,2,3,4,5];

const foundIndex = numbers.findIndex(function(number){
 return number > 2;
});

// foundIndex = 2;
```

## React Hooks
* __This is a React concept that is used to make our apps more interactive and dynamic. Its core idea consists of "hooking" the state of a component in order to change its appearance inside the application.__
* __Important: Remember that button elements of HTML have an attribute called ```on-click``` which receives a function that will be called/trigged when the said button is pressed. It's also worth mentioning that when we are working with React the said attribute must be written as ```onClick```.__
* The most common and used example of React Hooks is the __useState__ hook. This hook can only be used inside __Functional Components (That is, components that are actually JS functions).__
* The code snippet bellow will show the basic principle of this type of React Hooks.
```javascript
import React from "react";

function App(){
  const [count, setCount] = React.useState(0);
  //The React.useState(initialState) method returns an array of 2 elements:
  //1) The first element holds the value of the initial state.
  //2) The second element is a function that updates the state.

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1> {count} </h1>
      <button onClick={decrease}> - </button>
      <button onClick={increase}> + </button>
    </div>
  );
}

export default App;
```
* The code snippet below shows a simple application which tells the user the current time when he/she presses the "Get Time" button:
```javascript
import React from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [initialTime, setTime] = React.useState(currentTime);

  function getCurrentTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1> {initialTime} </h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
```
* The code snippet below shows a simple application which tells the user the current time in a synchronous way:
```javascript
import React from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [initialTime, setTime] = React.useState(currentTime);

  setInterval(getCurrentTime, 1000);

  function getCurrentTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1> {initialTime} </h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
```

## Event Handling in React
* When working with React, we can handle more events than just a click on a button.
* __I highly recommend that you take a look at the article "HTML events" present inside the w3schools website to take a look at the other events that we can handle using React.__
* The code snippet below shows how to change the color of a button component when the mouse is put on it:
```javascript
import React from "react";

function App() {
  const [initialMouse, setMouse] = React.useState(false);

  function mouseOver() {
    setMouse(true);
  }

  function mouseOut() {
    setMouse(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: initialMouse ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
```

## React Forms
* In this section, we are going to learn how to extract info from a form using React.
* Also, we are going to learn how to change the state of our appplication based on the information present inside a form.
* __The first thing that we must know is that the HTML ```<input></input>``` element is used to create a form. This element has an attribute called ```onChange``` which can call a function every time the user changes the content of the said ```<input></input>``` element.
* __The called method will receive a single parameter (which is usually called ```event```) that has important info about the ```<input></input>``` element such as: the content of the element, its placeholder, its title and many other info that can be found by consulting the documentation related to the ```onChange``` attribute.__

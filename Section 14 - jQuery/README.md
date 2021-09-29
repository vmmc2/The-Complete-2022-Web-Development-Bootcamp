# Section 14 - jQuery

### Selecting Elements with jQuery
* As we saw previously, in pure JavaScript we can select a single element (CSS Selector) in the following way:
```js
  var heading = document.querySelector("h1"); //select the first h1 HTML element.
  var cls = document.querySelector(".btn"); //select the first HTML element which has the ".btn" class.
  var id = document.querySelector("#subtitle"); //select the HTML element that has the id "#subtitle".
```
* When we wanted to select all HTML elements from a HTML file that satisfied a certain criteria, we should use the following function:
```js
  var allH1Heading = document.querySelectorAll("h1");
  var allBtnClasses = document.querySelectorAll(".btn");
  //Does not need to show an example for id because in each HTML file there can only be 1 HTML element with a specific id.
```
* __When we are dealing with jQuery, we can do the same thing with less code. Another thing that one must keep in mind is that the function below always selects all HTML elements that satisfy a certain criteria.__
```js
  var hd = $("h1"); // select all h1 HTML elements.
  var hd2 = jQuery("h1");
  var allBtnClasses = $(".btn");
```

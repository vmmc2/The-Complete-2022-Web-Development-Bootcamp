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

### Manipulating Styles with jQuery
* __Again, one thing that one must keep in mind is that the function below always selects all HTML elements that satisfy a certain criteria.__
* One can manipulating CSS styles with very ease using jQuery.
* __Let's see an example of how to set a css property (and its css value) of a specific HTML element.__
```js
$("h1").css("font-size", "20px");
//The first parameter is the css property that we are going to change and the second parameter is the css value to which we want to change the css property.
```
* __It's also possible to get the value of a css property of a specific HTML element.__
```js
$("h1").css("font-size"); //This is going to return the string "12px".
```
* __We can also add CSS classes using jQuery.__
```js
$("h1").addClass("big-font");
//We can add more than one CSS class by separating the classes names by whitespaces.
$(".btn").addClass("big-font small-margin");
```
* __We can also remove CSS classes using jQuery.__
```js
$("h1").removeClass("big-font");
//We can remove more than one CSS class by separating the classes names by whitespaces.
$(".btn").removeClass("big-font small-margin");
```
* __Finally, we can also check if a HTML element has a specific CSS class.__
```js
$("h3").hasClass("margin-50"); //This function returns a boolean (true or false).
```

### Manipulating Text with jQuery
* __Remember, using jQuery apply changes to all HTML elements that satisfy a certain criteria.__
* As we saw earlier, one can maniputaling text using vanilla JavaScript through 2 different attributes: ```innerHTML``` and ```textContent```.
* With jQuery, one can do the exactly same thing. However, now we are going to use methods:
```js
$("h1").text("bye-bye! Farewell!"); //This changes the previous text content of h1 to "bye-bye! Farewell!"
$("h1").html("<em> ciao </em>"); //This changes the previous html content inside the h1 tags to "<em> ciao </em>"
```

### Manipulating Attributes with jQuery
* We can get/set the value of attributes of HTML elements using jQuery in the following way:
```js
  $("img").attr("src"); // get the value of the attribute "src" from the img HTML element.
  $("a").attr("href", "https://www.google.com"); // set the value of the attribute "href" to "https://www.google.com"
```

### Adding eventListeners with jQuery
* Adding an eventListener to a "h1" element that listens to "click" events:
```js
  $("h1").click(function() {
    $("h1").css("color", "purple");
  });
```
* What if we want to add an eventListener to several HTML elements? Take a look at the comparison below:
```js
// 1) Vanilla/Pure JavaScript
for(var i = 0; i < document.querySelectorAll("button").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    document.querySelector("h1").style.color = "purple";
  });
}

// 2) jQuery JavaScript
$("button").click(function(){
  $("h1").css("color", "purple");
});
```
* Same thing applies if we wanted to detect keypresses:
```js
$("input").keypress(function(event){
  console.log(event.key); //Shows in the console which key was pressed.
});
// To detect keys being pressed inside the HTML page, we can use: $(document) or $("body")
```
* We can be more flexible when adding eventListeners to HTML elements:
* __These events mentioned below can be found at the MDN website.__
```js
$(HTML_ELEMENT).on(EVENTO, function(){
  //FUNCAO DE CALLBACK
});
```

### Adding and Removing HTML elements with jQuery
* One can select and delete/remove a HTML element by the following way:
```js
  // Remember that the method shown below applies to all HTML elements that satisfy the criteria.
  $("h1").remove();
  $(".btn").remove();
  $("#identity").remove();
```
* One can add HTML code to the HTML element through 4 different ways. These ways are: ```before```, ```after```, ```prepend```, ```append```.
* __```before```: Adds a HTML element right before the selected HTML element.__
```js
  $("h1").before("<button>New</button>");
```
* __```after```: Adds a HTML element right after the selected HTML element.__
```js
  $("h1").after("<button>New</button>");
```
* __```prepend```: Adds a HTML element inside the selected HTML element but right after the opening tag.__
```js
  $("h1").prepend("<button>New</button>");
```
* __```append```: Adds a HTML element inside the selected HTML element but right before the closing tag.__
```js
  $("h1").append("<button>New</button>");
```

### Creating animations with jQuery
* There are several animation effects that we can create using jQuery such as: fadeIn, fadeOut, toggle, slideUp, slideDown, animate, etc...
* Check the documentation if you want to learn more about it.

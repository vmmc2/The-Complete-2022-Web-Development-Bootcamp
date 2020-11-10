# Introduction to CSS
* CSS stands for Cascade Styling Sheet

## 01) How and Why to use
* CSS is used when we want to give a style to a particular element inside our HTML file.
* We can use it in several way: We can use it embedded inside a HTML tag, we can use it inside a ```<style></style>``` tag that exists inside the ```<head></head>``` tag or we can use it inside a separate file that we usually call "style.css".
* These ways of using CSS are commonly called:
   * Inline CSS
   * Internal CSS
   * External CSS

## 02) Example of styling the whole body of a HTML file.
```html
...
<head>
  <meta>
  <title> Example 1 </title>
  <style> <!-- These lines of code are responsible for changing the whole background color of our webiste. -->
    body {
      background-color: powderblue; 
    }
  </style>
</head>

...
```

## 03) Percentage and Absolute Value
* When we are styling our website we might want to maintain a specific percentage of the whole screen (the width of the body).
* To do that, we can use different types of values when coding CSS. The first value is "absolute value" and it reffers to the number of pixels in the screen. The second value is "percentage" and it reffers to the percentage.
```css
body {
  height: 250px; /* Value expressed using absolute value (pixels) */
  width: 30%; /* Value expressed using percentage */
}
```

## 04) Working with Horizontal Rule (hr) and CSS
```css
hr {
  border-style: dotted none none none;
  border-color: grey;
  border-width: 5px;
  height: 0px;
  width: 5%; 
}
```

## 05) Priority of Inline, Internal and External CSS
* When we want to stylize the same property of the same HTML element we must keep in mind that the order of priority in CSS follows this rule: Inline CSS -> Internal CSS -> External CSS.
* Best practice: Do your design using External CSS.

## 06) CSS Syntax
* The CSS syntax is composed by three different elements: The Selector, The Property, The Value.
  * The Selector: is who you want to change. Is it the h1? the p? the img?
  * The Property: specifies which property of the HTML element you want to change. Is it the background-color? the font-size?
  * The Value: specifies the value that you chose to change the HTML element in some visual way.
* Example of CSS Code:
```css
selector {
  property1: value1;
  property2: value2;
  /*  ...  */ /* This is a comment in CSS*/
  propertyn: valuen;
}
```

## 07) CSS Selectors
* When working with CSS, we have basically three major types of CSS Selectors. They are: "tag", "id", "class".
* We use them in different ways. You will find different examples below:
```css
/* 
CSS Selector: Tag 

html_tag_name{
  property1: value1;
  property2: value2;
}
*/

img {
  background-color: red; 
}

/*
CSS Selector: Class

.html_class_name{
  property1: value1;
  property2: value2;
}
*/

.broccoli {
  background-color: powderblue;
}
```

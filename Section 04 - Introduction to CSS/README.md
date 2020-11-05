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



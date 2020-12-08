# Intermediate CSS

## 01) The ```<div></div>``` tag in HTML
* This tag is used to structure and divide the content inside our HTML file (webpage).
* It won't be displayed in a different manner unless we apply CSS rules to it.
* __Important: Remember that, by default, the HTML file (index.html) already has its own style (Default CSS). So, to do some adjusts inside of it, we must override these properties of these specific CSS selectors. Take a look at the example below:__
```css
body {
    background-color: white;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
}

h1{
    margin-top: 0px;
}

div{
    background-color: #E4F9F5;
}
```
* __Every HTML element is viewed as a box by the browser. This type of model is commonly called: The Box Model.__
* When we are dealing with the size of a HTML element, there are two different ways of approaching it:
  * __By using pixels:__ This is like the size of the thing (width, height, border, margin,...) in absolute pixel value.
  * __By using percentage:__ This is like when we are dealing with a ratio in respect to the size of our viewport (the size of our screen), where 100% corresponds to the size of the whole screen that is being used.

## 02) The CSS Box Style
* The difference between __Margin__ and __Padding:__
  * Margin: Is the space between HTML elements outside of their borders.
  * Padding: Is the space between HTML elements when one of the elements is inside another element. It is also in respect to the borders.
* __Padding can make a HTML element bigger whereas margin cannot make the element bigger.__
* __IMPORTANT: The ```<span></span>``` tag from HTML can be used to select a specific part of a text (inside a ```<p></p>``` tag for example) and them we can stylize it using a class or an id.__

## 03) The CSS Display Property
* The CSS Display property has four different values: __Block, Inline, Inline-Block, None.__ These values make the HTML elements behave in different ways. We can change it in the CSS file by accessing the "display" property of a selector and then changing its value to one of the four values above.
  * __Block:__ Block elements are those that take up the whole width of a screen web page. They block any other elements from sitting next to them on the left or on the right. Some examples of HTML elements that are block elements are: ```<p>, <h1> to <h6>, <div>, <ul>, <ol>, <li>, <form>```
  * __Inline:__ Inline elements are those that take up as much space as they need. Therefore, we can put inline elements next to each other on the left or on the right (in other words, we can put inline elements in the same row). Some examples of HTML elements that are inline elements are: ```<span>, <img>, <a>```. __Keep in mind that: YOU CANNOT CHANGE THE "WIDTH" PROPERTY OF AN INLINE HTML ELEMENT.__
  * __Inline-Block:__ Inline-Block elements are those that can sit next to the other in the same row and can also get their "width" property changed.
  * __None:__ This value makes the element to disappear from the website as if it never really existed. You can use it to hide a certain element in your webpage. You can also use a CSS property called "visibility" for this same purpose. One must keep in mind that, if you are using the "visibility" property, the element will just become invisible but will also "stay" there.
  
## 04) The CSS Position Property
* The CSS Position property is commonly used to display the HTML elements of our webpage in a certain position. This property has four different values: __Static, Relative, Absolute, Fixed.__ 
  * __Static:__ Is the most common type of position. This just means "go along with the HTML rules and keep it to the default".
  * __Relative:__ Is another value of the Position property. It is used to adjust the position of a HTML element based on its original position (using the value __Static__ for the Position property). In this case, we have four different coordinates: Top, Bottom, Left, Right. When we use this, it is as if the element that has been moved left its own ghost at its original position. __(Works like "margin"). The relative positioning is relative to where the element would have been displayed if it was following the original HTML flow.__ It does not affect the positioning of other elements in the screen.

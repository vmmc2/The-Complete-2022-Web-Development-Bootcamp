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
* __If you want to put a bunch of elements in a row, consider using the "Inline-Block" value.__
  
## 04) The CSS Position Property
* The CSS Position property is commonly used to display the HTML elements of our webpage in a certain position. This property has four different values: __Static, Relative, Absolute, Fixed.__ 
  * __Static:__ Is the most common type of position. This just means "go along with the HTML rules and keep it to the default".
  * __Relative:__ Is another value of the Position property. It is used to adjust the position of a HTML element based on its original position (using the value __Static__ for the Position property). In this case, we have four different coordinates: Top, Bottom, Left, Right. When we use this, it is as if the element that has been moved left its own ghost at its original position. __(Works like "margin"). The relative positioning is relative to where the element would have been displayed if it was following the original HTML flow.__ It does not affect the positioning of other elements in the screen.
  * __Absolute:__ When we use this value for the Position property, we are basically positioning this HTML element in respect to its parent. __It is important to note that this type of positioning actually modifies the positioning of other elements in the screen__. __If you want to position something relative to its parent, then the best way to do it is through "absolute" positioning.__ Take a look of a code snippet that uses this type of positioning:
  ```css
  div {
    position: relative;
  }
  img {
    position: absolute;
    right: 30px;
  }
  ```
  * __Fixed:__ This type of positioning makes the HTML element stay in a fixed positioning in respect to the body. If we scroll down the webpage, for example, the HTML element that has a "fixed" position will stay at this specific position while we do the scroll. __It's really useful when we are dealing with headers and navbars.__

## 05) Aligning HTML elements through CSS
* The easiest way to do it is using the "text-align" property in CSS. It's commonly used in the parent HTML element of the element that we want to center. __It will center everything inside this parent element that does not have a "width" property.__
* If we define the "width" property of a specific element, we will see that it will become impossible for us to center this element using the "text-align" property. __So, what do we do in this case? We can use the "margin" property.__ It is recommended that we use the value "auto" when dealing with this type of situation.
* __How to take an HTML element from the HTML flow? We basically need to change the value of its "position" property from the CSS to "absolute".__ One must keep in mind that it's recommended that the parent element has a position of type "relative".

## 06) Font Styling in CSS
* We have 5 different font styles but we are going to use only 3 font styles: Serif, Sans-Serif and Monospace. 
* The monospace font style is special because all letters in this style have the same height and width.
* You are not going to use "cursive" and neither "fantasy".
* It's recommended to use what people commonly call: "websafe_fonts".
* But this is not 100% safe. So what do we do? __We use fallbacks.__ Take a look at the code snippet that uses fallbacks:
```css
body {
    margin: 0;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```
* Another option to ensure 100% safe is to use embedded fonts. One common way to do this is to use "Google Fonts".

## 07) Font-Size
* It is recommended to express the size of HTML elements using percentage. When it comes to font-size, keep in mind that 100% = 16px. So, if we want to express a size of 90px in percentage, we must do the following: 90px/16px = 5.625 -> 5.625 * 100 = 562.5%.
* This same logic applies when we are dealing with another unit for font-size called "em". In this case, we have the following: 1em = 16px = 100%.
* Prefer to use "em" or "%" because it uses dynamic font-size. It is important for accessibility.
* Be careful when using "%" or "em" because it inherits the size of the font from its parents and "adds" the size on top of it. Take a look at the code below:
```css
body {
    background-color: white;
    margin: 0px;
    text-align: center;
    font-family: 'Merriweather', serif;
    font-size: 2em;
}

h1 {
    font-size: 5.625em; /* since h1 is inside the body, it will apply the "2em" font-size and it will also apply on top of it the font-size of "5.625em". So, in the end, the font-size of h1 will be greater than "5.625em". */
}
```
* __If you want to avoid the problem described above, then you should use "rem" (also called root em). This type of unit does not get affected by upstream size changes. In other words, you don't need to worry about inheritance and parents. It's easier to debug.__
* __Prefer to use "rem" instead of "px", "em", "%".__

## 08) Another way of centering HTML elements in CSS
* One way to do it is to set the margin (margin-top, margin-left, margin-right, margin-bottom) to the value: __"auto"__.
* __When we are dealing with percentage, keep in mind that the percentage in a HTML element is relative to the parent element.__

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

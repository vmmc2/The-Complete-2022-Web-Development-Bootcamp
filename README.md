# The-Complete-2020-Web-Development-Bootcamp
My codes and notes for this course

### Principles of Code Refactoring
1) Readability
2) Modularity
3) Efficiency
4) Length

### Tips for Refactoring
* You can target multiple CSS selectors in the way described below, so your code is not too repetitive and big:
```css
h1, h2, h3, h4, h5, h6{
  font-family: "Montserrat", sans-serif;
}
```

* Try to do general and broad styling to common CSS selectors. When you want to apply a particular style to a specific part of your website, create a CSS class or a CSS id to do it.

* If there are many instances of the same style being applied in the CSS file, then you probably need to refactor it. And to do so, you need to write these styles as least as you can. Usually, you only need to write the specific style only once in a specific CSS class. And then you can encapsulate every part of the website that you want to have this style inside this new CSS class.

### Combining CSS Selectors
* One can combine different CSS selectors in order to apply more specific styles.
* There are many ways to combine CSS selectors. Let's see some of these ways:

#### Multiple Selectors
* Used when we want to apply the same style to different HTML elements.
```css
h1, h2, h3, h4, h5, h6{
  font-family: "Montserrat-Bold";
  color: #ffffff;
}
```

#### Hierarchical Selectors
* Used when you want to apply very specific styles to some HTML elements of your website.
* Structure of Hierarchical Selectors: ```selector1 selector2 {}```
* Example: Say you want to apply a specific style to a HTML element that has a class ".title" that is also inside a HTML element that has a class ".container-fluid". Then we would write the following CSS:
```css
.container-fluid .title{
  font-family: sans-serif;
  font-size: 36px;
}
```

#### Combined Selectors
* Used when you want to apply a specific style to a HTML element that has more than one class or id.
* Structure of Combined Selectors: ```selector1selector2```
* Example:
```css
.container.title{
  color: red;
}
```

### Selector Priority
* The priority of the selectors that are used to apply styles is (from higher to lower priorities): id ---> class ---> html elements
* Use CSS id sparingly. __Only use it when you ABSOLUTELY HAVE TO.__ One can also use it in HTML sections.
* Always prefer to give only 1 CSS class to a HTML element. Simplicity always!

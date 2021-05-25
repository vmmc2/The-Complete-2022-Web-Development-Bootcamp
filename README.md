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

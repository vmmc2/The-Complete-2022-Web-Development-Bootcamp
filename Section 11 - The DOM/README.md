# The DOM (Document Object Model)

## Inserting JavaScript into a Website
* We can use javascript in our website through different ways: we can use it in a embedded way in the HTML file, we can use it in an internal way also inside the HTML file and we can use it in an external way in a separate .js file.
  * Embedded: We put our javascript code inside double quotes ```""``` as a value for an HTML attribute called ```onload```. This way has a lot of downsides: it is not modular, it is difficult to debug and, thus, is not a good practice.
  * Internal: It's a better option. To use this, we put the JS code inside the ```script``` tag in the HTML file. Take a look at the example below:
```HTML
<script type="text/javascript">
    alert("Hello World!");
</script>
```
  * External: It's the best option. To use this, we must put the path to our JS file inside the ```<script></script>``` tag in the HTML file. Take a look at the example below:
```HTML
<script src="index.js" charset="utf-8"></script>
```

## Important Notes
* __Always put the path to the CSS file in the head of the HTML file.__
* __Always put the path to the JS file at the end of the ```<body></body>``` tag in the HTML file.__

## DOM (Document Object Model)
  

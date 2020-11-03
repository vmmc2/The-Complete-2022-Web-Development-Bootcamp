# Section 03 - Intermediate HTML
* Code snippets and notes about this specific section stays here.

## 01) The < table > tag and its structure
* To declare a table in HTML, we use the < table > < /table > tag.
* A table in HTML is made of rows and, to declare a row, we use the < tr > < /tr > tag.
* And a row is made of table data (that are also commonly known as table cells). A table cell must be declared inside a table row. To declare a table data/table cell, we use the following tag: < td >< /td >
* Take a look at the example below:
```html
<table border="1">
  <tr>
    <td> Clementine </td>
    <td> 25 </td>
  </tr>
  <tr>
    <td> Joel </td>
    <td> 28 </td>
  </tr>
</table>
```
* There are also different types of tags that can be used within a table tag. 
* A table in HTML is structured in 3 different parts: the header, the body and the footer. To specify the header, we use the ```<thead></thead>``` tag. To specify the body, we use the ```<tbody></tbody>``` tag. Finally, to specify the footer, we use the ```<tfoot></tfoot>``` tag.

## 02) The < form > tag and its structure
* This tag is used to create a form inside a webpage. This tag by itself just creates the structure of a form.
* To populate the form, we must 2 other types of tags: ```<label></label>``` tag and ```<input>``` tag. The label tag is used to give a name to a specific field of a form.
* On the other hand, we use the input tag to describe how the user should provide the data that we are expecting. To achieve this goal, we must use the HTML attribute called "type" inside the input tag. This attribute can have different values such as: text, color, checkbox, submit, password and many others (For more info, check out the documentation at MDN).
* One that is interesting is the attribute "file", which allows an user to choose a file from its host.
* Example of HTML code using the ```<form></form>``` tag:
```html
        <form class="" action="index.html" method="post"> <!-- tag para criar um formulario em HTML -->
            <label> Your Name: </label>
            <input type="text" name="" value=""> <!-- esse input serve como uma caixa de texto -->
            <br>
            <label> Select your favorite color:</label>
            <input type="color" name="" value=""> <!-- esse funciona como um color picker -->
            <br>
            <label> Would you like to sign up to our newsletter? </label>
            <input type="checkbox" name="" value="">
            <br>
            <input type="submit" name=""> <!-- esse daqui funciona como um botao de envio de forms -->
        </form>
```

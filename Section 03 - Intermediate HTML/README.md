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
* A table in HTML is structured in 3 different parts: the header, the body and the footer. To specify the header, we use the < thead >< /thead > tag. To specify the body, we use the < tbody >< /tbody > tag. Finally, to specify the footer, we use the < tfoot >< /tfoot > tag.

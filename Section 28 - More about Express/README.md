# Section 28 - More about Express

## Intro
* Here we are going to learn more things about Express.js

## Dynamic Routing
* Let's say that you already have implemented a to-do list application but you don't want this application to have only one list. You want to be able to create more than one single list in such way that different to-do lists are stored in different routes.
* As an example: Let's say that you want to have three diferent lists. One list will contain your tasks related to your house. Another list will contain your tasks related to the university. Finally, another list will contain your tasks related to work. Each of these lists need to be accessed through a different route:
  * ```localhost:3000/House```
  * ```localhost:3000/University```
  * ```localhost:3000/Work```
* __How can we do that using dynamic routing in Express.js?__
  * We can do that by using __parameters__ inside the routes of our application.
  * Here's the following way (the template) of how we could do that:
  ```javascript
  app.get("/category/:<parameter_name>", function(req, res){
      // Access req.params.parameter_name
  });
  ```
  * A more concrete example (applied to our scenario) would be:
  ```javascript
  app.get("/:customListName", function(req, res){
      const customListName = req.params.customListName; // O valor disso vai ser o nome que eu digitar no lugar de ":customListName"
      
      const list = new List({
          name: customListName,
          items: defaultListItems
      });
      
      list.save();
      
  });
  ```
  * But we must keep one thing in mind. The code as it is will keep creating new lists with default list items even if a list has already been created. So, in order to correct this, we must try to find if a list has already been created and, if that is the case, then we will use the already created list instead of creating another one.
  ```javascript
  app.get("/:customListName", function(req, res){
      const customListName = req.params.customListName; // O valor disso vai ser o nome que eu digitar no lugar de ":customListName"
      
      List.findOne({name: customListName}, function(err, foundList){
          if(!err){
              if(!foundList){
                  // We need to create a new list.
                  const list = new List({
                    name: customListName,
                    items: defaultListItems
                  });
      
                  list.save();
                  res.redirect("/" + customListName);
              }else{
                  // No need to create a new list. We must show the existing one.
                  
                  res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
              }
          }
      });
  });
  ```

## Navigating through our app routes by using Anchor tags ```<a></a>```
* __You don't need to always use the ```<form></form>``` tag in order to go to another route. You can use a simple ```<a></a>``` tag.__
* __Let's say that in your application you have three routes: the root route ("/"), the about route ("/about") and the contact-us route ("/contact"). In order to navigate through these three routes using ```<a></a>``` tags, all you have to do is refer to these routes inside the ```href``` attribute:__
```HTML
<ul class="nav navbar-nav navbar-right">
    <!-- 6 -->
     <li id="home"><a href="/">HOME</a></li>
     <li id="about"><a href="/about">ABOUT US</a></li>
     <li id="contact"><a href="/contact">CONTACT US</a></li>
</ul>
```

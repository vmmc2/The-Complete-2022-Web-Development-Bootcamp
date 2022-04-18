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
  * Here's the following way of how we could do that:
  * ```javascript
  app.get("/category/:<parameter_name>", function(req,res){
      // Access req.params.parameter_name
  });
  ```


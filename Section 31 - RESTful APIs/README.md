# Section 31 - RESTful APIs

## Intro
* In this module we will learn how to build a RESTful API.
* __REST__ means REpresentational State Transfer. 
* Before we take a deep dive about the meaning of a RESTful API, we must remember some things about Client-Server Architecture:
  * First of all, we must remember that the Client is responsible for making request and the Server is responsible for answering the request, if those request are feasible (If that's not the case, then the Client will probably receive some type of Client-error such as 404 (not found)).
  * In order to make and answer such request, the Client and the Server must speak the same language. In other words, a protocol must be followed in this process of request and response. The most famous protocol is the __HTTP__ but there are others like __HTTPS (this one is prefefred over HTTP by the way)__ and __FTP__ (there are many others).
  * __After defining the language that will be use in the communication between the Client and the Server, we must define what type of things the Server will provide to the client (What type of requests it will respond?). This is done by the creation of an API (Application Programming Interface).__

## RESTful APIs
* REST is just an arhictectural style of building APIs. There are many other different architectural styles to build APIs such as SOAP.
* As an analogy, there are many different architectural styles when it comes to building such as the baroque, the gothic, the neoclassical and others. In the same way, there are different architectural styles used to create/build APIs (REST, SOAP, etc).
* __The gold standard for architectural style in APIs is the REST architecture style.__

## The Rules of RESTful APIs
* As you might imagine, there is a big set of rules that must be followed in order to make your API RESTful. The set is very big and we won't focus on every rule. Instead, we will focus on the two major rules, which are:
  * __Use HTTP request verbs.__
  * __Use specific pattern of routes/endpoints URLs.__

## The HTTP request verbs
* The most common HTTP request verbs that you will be using are: __GET, POST, PUT, PATCH, DELETE.__
* One must keep in mind that the HTTP request verbs have similarities with the most common database operations that we've seen previously (CRUD): __Create, Read, Update, Delete.__
* Now we will do a comparison to see how the HTTP request verbs work with the most common database operations.

### GET
* The HTTP __GET__ request verb works in the same way as the __Read__ database operation.
* Take a look at the code snippet below. There, we make a GET request, which is expected to return something (a webpage, data, anything). In this type of request, we usually make a query to our database in order to retrieve some data.
```javascript
app.get("/", function(req, res){
    // Make some query to the database in order to return data as a response to the Client-side.
});
```

### POST
* The HTTP __POST__ request verb works in the same way as the __Create__ database operation.
* Take a look at the code snippet below. There, we make a POST request, which is expected to interact with our database in such a way that it will simply create a new entry inside our database.
```javascript
app.post("/", function(req, res){
    // The "req" parameter contains some data that we want to save.
    // The "res" parameter will only save the requested data inside our database.
});
```

### PUT/PATCH
* The HTTP __PUT or PATCH__ request verbs work in the same way as the __Update__ database operation.
* But what's the difference between __PUT__ and __PATCH__ ?
  * __PUT__ -> You send a completely new entry to replace the previous one inside the database.
  * __PATCH__ -> You only send the piece of data needs to be updated inside the database.
* The code snippet below show how to use this HTTP request verb in JavaScript.
```javascript
app.put("/", function(req, res){
    
});
```

### DELETE
* The HTTP __DELETE__ request verbs work in the same way as the __Delete__ database operation.
* The code snippet below show how to use this HTTP request verb in JavaScript.
```javascript
app.delete("/", function(req, res){
    
});
```

## Things that are important to review and consult when dealing with RESTful APIs
* __Learn more about Express.js by reading its documentation.__
* __Review the URL encoding and decoding style.__

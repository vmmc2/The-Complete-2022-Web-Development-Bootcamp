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

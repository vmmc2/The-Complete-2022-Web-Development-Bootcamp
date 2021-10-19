# Section 20 - APIs

## APIs
* A.K.A Application Programming Interface.
* API is a set of objects, protocols and methods that are used by a developer to interact with external software (OpenWeatherAPI) or to create software (jQuery).
* APIs consist of four different key ideas: endpoints, parameters, paths and authentication.
### Endpoints
* Endpoints são as URLs originais/principais usadas para acessar uma API.
### Paths
* Paths são usados para obter informações específicas de uma API. Normalmente, são separados por ```/```.
### Parameters
* Parameters são utilizados para realizar consultas/queries a uma API. A primeira query deve começar com um caractere ```?```. Cada consulta é constituida por um par key-value expresso no seguinte formato: ```key=value```. Se eu tiver mais de uma consulta para fazer, elas devem estar separadas pelo caractere ```&```.
* Vale ressaltar que a ordem dos parameters não importa.

## HTTP Response Types
* Existem basicamente 5 tipos de respostas HTTP:
  * 1) Informational Responses (100 - 199)
  * 2) Sucessful Responses (200 - 299)
  * 3) Redirects (300 - 399)
  * 4) Client Errors (400 - 499)
  * 5) Server Errors (500 - 599)

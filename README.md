# Crypto Portfolio

## Description

"Crypto Portfolio" is a website for your crypto currency portfolio. It allows you to add, modify and delete your portfolio. Once you have your portfolio created you can view it and the website will generate charts to visualize your current portfolio.

## Entity definition

Crypto Currency Portfolio Entity:

- id(mongodb auto generated id)
- Name (string, 5 < lenght < 30, required)  
- Descriptiom (string, lenght < 300)  
- Bitcoin amount (number, >0)  
- Ethereum amount (number, >0)  
- LTC amount (number, >0)  

## API definition

App will use coinranking api: https://docs.coinranking.com/

- GET https://api.coinranking.com/v1/public/coin/:coin_id - receive information about specific coin

- GET /portfolio/edit/{id} get portfolio by id

- GET /portfolio/ get all portfolios 

- POST /portfolio/update/{id} updates existing portfolio by id 

- POST /portfolio/add/ adds a portfolio

- DELETE /portfolio/{id} delete portfolio by id

Errors:

- 400: "unable to update the database"
- 400: various input JOI validation errors
- 404: "data is not found"
- 500: "internal server error"
## UI definition

Wireframe:

- https://wireframe.cc/lOXnLE

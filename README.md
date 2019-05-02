# Crypto Portfolio

## Description

"Crypto Portfolio" is a website for your crypto currency portfolio. It allows you to add, modify and delete your portfolio. Once you have your portfolio created you can view it and the website will generate charts to visualize your current portfolio.

## Entity definition

Crypto Currency Portfolio Entity:

- Name (string, lenght < 30)  
- Descriptiom (string, lenght < 300)  
- Creation date (date type) 
- Bitcoin amount (number, >0)  
- Ethereum amount (number, >0)  
- LTC amount (number, >0)  

## API definition

App will use coinranking api: https://docs.coinranking.com/

- GET https://api.coinranking.com/v1/public/coin/:coin_id - receive information about specific coin

- GET /portfolio/edit/{id} get portfolio by id (404: "data is not found")

- GET /portfolio/ get all portfolios 

- POST /portfolio/update/{id} updates existing portfolio by id (400: "unable to update the database", 404: "data is not found")

- POST /portfolio/add/ adds a portfolio

- DELETE /portfolio/{id} delete portfolio by id (404: "data is not found")

## UI definition

Wireframe:

- https://wireframe.cc/lOXnLE
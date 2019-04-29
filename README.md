# Crypto Portfolio

## Description

This web system will allow to add and update your crypto currency portfolio. Also, it will visualize it and provide other intresting information about it.

## Entity definition

Crypto Currency Portfolio  

name (string, lenght < 30)  
descriptiom (string, lenght < 300)  
creation date (date type)  
modification date (date type)  
bitcoin amount (number, >0)  
ethereum amount (number, >0)  
ltc amount (number, >0)  

## API definition

App will use coinranking api: https://docs.coinranking.com/

- GET https://api.coinranking.com/v1/public/coin/:coin_id - receive information about specific coin

- GET /portfolio/{id} get portfolio by id

- GET /portfolio/ascending  get array of portfolios sorted by creation date in ascending order

- GET /portfolio/descending  get array of portfolios sorted by creation date in descending order

- POST /portfolio/update/{id} updates existing portfolio by id

- POST /portfolio/add/ adds a portfolio

- DELETE /portfolio/{id} delete portfolio by id

## UI definition
- [ ] Define the structure of how visually the WEB system is going to look like
- [ ] Should have at least one view defined with https://wireframe.cc (or other wireframe tool):
- [ ] The view should have a title
- [ ] The view should have a description of a service provided by web system
- [ ] The view should include at least 2 UI components:
    - [ ] A component to display multiple entities with all their attribute values visible. It should be posible to remove and edit selected entity.
        - [ ] Depending on chosen header of API method that returns multiple entities, it should be posible to select specific 10 entities starting index, sort entities by attribute, filter entities by attribute pattern, or other (should be approved by Product Owner (PO))
    - [ ] A component to create a new entity/edit existing entity. It should be posbile to create new entity and edit selected entity
        - [ ] Each attribute should have a dedicated editor field: text box for string or number, checkbox or radio buttons for boolean, date picker for date, etc.
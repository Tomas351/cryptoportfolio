const express = require('express');
const portfolioRoutes = express.Router();

let Portfolio = require('./portfolioModel');

// add portfolio
portfolioRoutes.route('/add').post(function (req, res) {
  let portfolio = new Portfolio(req.body);
  portfolio.save()
    .then(portfolio => {
      res.status(200).json({'portfolio': 'portfolio in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
portfolioRoutes.route('/').get(function (req, res) {
    Portfolio.find(function(err, portfolios){
    if(err){
      console.log(err);
    }
    else {
      res.json(portfolios);
    }
  });
});

// Defined edit route
portfolioRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Portfolio.findById(id, function (err, portfolio){
      res.json(portfolio);
  });
});

//  Defined update route
portfolioRoutes.route('/update/:id').post(function (req, res) {
    Portfolio.findById(req.params.id, function(err, portfolio) {
    if (!portfolio)
      res.status(404).send("data is not found");
    else {
        portfolio.portfolio_name = req.body.portfolio_name;
        portfolio.description = req.body.description;
        portfolio.created = portfolio.created;
        portfolio.updated = Date.now;
        portfolio.btc = req.body.btc;
        portfolio.eth = req.body.eth;
        portfolio.ltc = req.body.ltc;
        portfolio.save().then(portfolio => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
portfolioRoutes.route('/delete/:id').get(function (req, res) {
    Portfolio.findByIdAndRemove({_id: req.params.id}, function(err, portfolio){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = portfolioRoutes;
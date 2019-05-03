const express = require('express');
const portfolioRoutes = express.Router();
const Joi = require('joi');
let Portfolio = require('./portfolioModel');

// add portfolio
portfolioRoutes.route('/add').post(function (req, res) {
  let portfolio = new Portfolio(req.body);
  const schema = Joi.object().keys({
    portfolio_name: Joi.string().trim().min(5).max(30).required(),
    description: Joi.string().trim().max(300),
    btc: Joi.number().min(0),
    eth: Joi.number().min(0),
    ltc: Joi.number().min(0)
  })
  Joi.validate(req.body,schema,(err, result)=> {
      if(err){
        return res.status(400).send({status: 'fail', message: err.details[0].message});
      }
      portfolio.save()
      .then(portfolio => {
        res.status(200).json({'portfolio': 'portfolio in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
    })
});

// get list of all portfolios
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

// get portfolio by id
portfolioRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Portfolio.findById(id, function (err, portfolio){
    if (!portfolio)
      res.status(404).send("data is not found");
    else{res.json(portfolio);}  
  });
});

//  update portfolio
portfolioRoutes.route('/update/:id').post(function (req, res) {
  const schema = Joi.object().keys({
    portfolio_name: Joi.string().trim().min(5).max(30).required(),
    description: Joi.string().trim().max(300),
    btc: Joi.number().min(0),
    eth: Joi.number().min(0),
    ltc: Joi.number().min(0)
  })
    Portfolio.findById(req.params.id, function(err, portfolio) {
    if (!portfolio)
      res.status(404).send("data is not found");
    else {
        portfolio.portfolio_name = req.body.portfolio_name;
        portfolio.description = req.body.description;
        portfolio.btc = req.body.btc;
        portfolio.eth = req.body.eth;
        portfolio.ltc = req.body.ltc;
        Joi.validate(portfolio,schema,(err, result)=> {
          if(err){
            return res.status(400).send({status: 'fail', message: err.details[0].message});
          }})
        portfolio.save().then(portfolio => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// delete portfolio with id
portfolioRoutes.route('/delete/:id').get(function (req, res) {
    Portfolio.findByIdAndRemove({_id: req.params.id}, function(err, portfolio){
      if(!portfolio)
      res.status(404).send("data is not found");
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = portfolioRoutes;
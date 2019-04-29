const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Portfolio = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  btc: {
    type: Number
  },
  eth: {
    type: Number
  },
  ltc: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: null
  }
},{
    collection: 'Portfolio'
});

module.exports = mongoose.model('Portfolio', Portfolio);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Portfolio = new Schema({
  portfolio_name: {
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
  created: {
    type: Date
  },
  ltc: {
    type: Number
  }
},{
    collection: 'Portfolio'
});

module.exports = mongoose.model('Portfolio', Portfolio);
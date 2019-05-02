const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const portfolioRoute = require('./route');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', portfolioRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
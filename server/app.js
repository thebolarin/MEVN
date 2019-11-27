const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());

app.use(cors());

const MONGODB_URI = 'mongodb+srv://bolarinwa:46sCJxpYnrHajTfc@cluster0-25yze.mongodb.net/crud?retryWrites=true&w=majority'



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const feedRoutes = require('./routes/feed');

app.use('', feedRoutes);


const port = process.env.PORT || 5000;


mongoose
.connect(MONGODB_URI ,{ useNewUrlParser: true })

  .then(result => {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch(err => {
    console.log(err);
  });

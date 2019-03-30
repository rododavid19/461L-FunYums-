const express = require('express');
const app = express();
var RecipeGetter = require('./getRecipes-DB');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();


app.route('/api/recipes').get((req, res) => {

  RecipeGetter.getRecipes(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});


app.route('/api/recipeNames').get((req, res) => {

  RecipeGetter.getRecipeNames(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});


app.route('/api/recipeDescriptions').get((req, res) => {

  RecipeGetter.getRecipeDescriptions(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/userInfo').get((req, res) => {

  RecipeGetter.getUserInfo(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/usernames').get((req, res) => {

  RecipeGetter.getUsernames(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/userPassword').get((req, res) => {

  RecipeGetter.getUserPassword(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/userFirstName').get((req, res) => {

  RecipeGetter.getUserFirstName(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/userLastName').get((req, res) => {

  RecipeGetter.getUserLastName(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/userFavoriteRecipes').get((req, res) => {

  RecipeGetter.getUserFavoriteRecipes(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});



app.set('port', 3000);
app.listen(3000); // 8080 for Google AE

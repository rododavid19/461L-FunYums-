var db = require('./funyums-DB-connection');

var RecipeGetter = {


  getRecipes: function(callback) {
    return db.query('SELECT * FROM recipe_content', callback);
  },

  getRecipeNames: function(callback) {
    return db.query('SELECT recipe_name FROM recipe_content', callback);
  },

  getRecipeDescriptions: function(callback) {
    return db.query('SELECT recipe_description FROM recipe_content', callback);
  },

  getUserInfo: function(callback) {
    return db.query('SELECT * FROM user_info_pseudo', callback);
  },
  getUsernames: function(callback) {
    return db.query('SELECT usernames FROM user_info_pseudo', callback);
  },
  getUserPassword: function(callback) {
    return db.query('SELECT passwords FROM user_info_pseudo', callback);
  },
  getUserFirstName: function(callback) {
    return db.query('SELECT firstNames FROM user_info_pseudo', callback);
  },

  getUserLastName: function(callback) {
    return db.query('SELECT LastNames FROM user_info_pseudo', callback);
  },

  getUserFavoriteRecipes: function(callback) {
    return db.query('SELECT favoriteRecipes FROM user_info_pseudo', callback);
  }



};

module.exports = RecipeGetter;



// import models
const City = require("./City");
const User = require("./User");
const Metro = require("./Metro");
const Comment = require("./Comment");
const Neighborhood = require("./Neighborhood");
const Prompt = require("./Prompt");
const Collection = require("./Collection");
const Session = require("./Session");
const neighborhoodStat = require("./neighborhoodStat");
const Visitor = require("./Visitor");



// metro has many cities
Metro.hasMany(City, {
  foreignKey: "metro_id",
});

// metro has many neighborhoods
Metro.hasMany(Neighborhood, {
  foreignKey: "metro_id",
});

//city belongs to Metro
City.belongsTo(Metro, {
  foreignKey: "metro_id",
});

// city has many neighborhoods
City.hasMany(Neighborhood, {
  foreignKey: "city_id",
});


City.hasMany(Comment, {
  foreignKey: "city_id",
});

// collection belongs to user
Collection.belongsTo(User, {
  foreignKey: "user_id",
});

Collection.belongsTo(Comment, {
  foreignKey: "comment_id",
});

Collection.belongsTo(Neighborhood, {
  foreignKey: "neighborhood_id",
});

Collection.belongsTo(Metro, {
  foreignKey: "metro_id",
});

Collection.belongsTo(Session, {
  foreignKey: "session_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment.belongsTo(Visitor, {
//   foreignKey: "visitor_id",
// });

// Comment belongs to prompt
Comment.belongsTo(Prompt, {
  foreignKey: "prompt_id",
});

// user has many comments
Prompt.hasMany(Comment, {
  foreignKey: "prompt_id",
});

// comment belongs to city
Comment.belongsTo(City, {
  foreignKey: "city_id",
});

Comment.belongsTo(Neighborhood, {
  foreignKey: "neighborhood_id",
});

Comment.belongsTo(Metro, {
  foreignKey: "metro_id",
});

// neighborhood belongs to Metro
Neighborhood.belongsTo(Metro, {
  foreignKey: "metro_id",
});

neighborhoodStat.belongsTo(Neighborhood, {
  foreignKey: "neighborhood_id",
});

neighborhoodStat.belongsTo(City, {
  foreignKey: "city_id",
});


// user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// user has many collections
User.hasMany(Collection, {
  foreignKey: "user_id",
});

User.hasMany(Session, {
  foreignKey: "user_id",
});

Visitor.hasMany(Session, {
  foreignKey: "visitor_id",
});

module.exports = {
  City,
  Collection,
  Comment,
  Metro,
  Neighborhood,
  neighborhoodStat,
  Prompt,
  User,
  Session,
  Visitor
};
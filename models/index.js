'use strict';

// import models
const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

//use has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//users have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

//comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});


module.exports = {
  User,
  Comment,
  Post
};
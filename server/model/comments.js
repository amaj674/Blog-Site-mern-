//model/comments.js

'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  author: String,
  text: String,
  imageURL: String,
  blog_title:String,
  posted_on:String  
});

module.exports = mongoose.model('Comment', CommentsSchema);
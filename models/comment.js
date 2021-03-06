var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Commentable = require("./commentable");

let CommentSchema = new Schema(
  {},
  {
    discriminatorKey: "kind"
  }
);

const Comment = Commentable.discriminator("Comment", CommentSchema);

module.exports = Comment;

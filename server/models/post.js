const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    index: true,
    unique: true
  },
  summary: String,
  content: String
});

PostSchema.index({ title: 1 });

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;

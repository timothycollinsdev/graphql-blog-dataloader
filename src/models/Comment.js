import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
});

const Comment = mongoose.model("comment", CommentSchema);
export default Comment;

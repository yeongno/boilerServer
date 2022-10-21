const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
    },
    postFrom: {
      type: Schema.Types.ObjectId,
    },
    proFileImg: {
      type: String,
    },
    userName: {
      type: String,
    },
    content: {
      type: String,
    },
    comNum:{
      type: Number,
    },
    repNum:{
      type: Number,
    },
    replyOn:{
      type: Boolean,
      default: false,
    },
    replyFrom:{
      type: Schema.Types.ObjectId,
    },
    replyName:{
      type: String,
    }
  },
  { timestamps: true }
);

const Reply = mongoose.model("ReplyList3", replySchema);

module.exports = { Reply };

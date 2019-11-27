const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feed', feedSchema);

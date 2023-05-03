const { Schema, model } = require('mongoose');

const petSchema = new Schema(
  {
    petName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
  }
);

const Pet = model('Pet', petSchema);

module.exports = Pet;

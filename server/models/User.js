const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      // checking if it's an actual email address
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    birthMonth: {
      type: Number,
      required: true
    },
    birthDay: {
      type: Number,
      required: true
    },
    birthYear: {
      type: Number,
      required: true
    },
    zipCode: {
      type: Number,
      required: true
    },
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
      }
    ]
    // for profile images
    // https://www.apollographql.com/docs/apollo-server/v2/data/file-uploads/
    // filename: {
    //   type: String,
    //   required: true,
    // },
    // mimetype: {
    //   type: String,
    //   required: true,
    // },
    // encoding: {
    //   type: String,
    //   required: true,
    // },
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const encryption_key = process.env.Encrypted_key;

const User_Schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Created_time: {
    type: Date,
    default: Date.now,
  },
});

User_Schema.plugin(encrypt, {
  secret: encryption_key,
  encryptedFields: ["password"],
});

module.exports = mongoose.model('User', User_Schema);
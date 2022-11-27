const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//new schema goes in here 

const User = model('User', userSchema);

module.exports = User;
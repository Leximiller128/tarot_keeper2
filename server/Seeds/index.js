const db = require('../config/connection');
const { Card, User } = require('../models');

const cardData = require('./tarot-images.json');
const userData = require('./user.json')

db.once('open', async () => {
  await Card.deleteMany({});

  await Card.insertMany(cardData);
  await User.insertMany(userData)

  console.log('cards seeded!');
  process.exit(0);
});

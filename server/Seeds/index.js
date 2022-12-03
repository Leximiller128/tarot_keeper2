const db = require('../config/connection');
const { Card } = require('../models');

const cardData = require('./tarot-images.json');

db.once('open', async () => {
  await Card.deleteMany({});

  await Card.insertMany(cardData);

  console.log('cards seeded!');
  process.exit(0);
});

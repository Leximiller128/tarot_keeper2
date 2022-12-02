const db = require('../config/connection');
const { Card } = require('../models');

const cardData = require('./NEW.json');

db.once('open', async () => {
//   await tarotCard.deleteMany({});

  const cards = await Card.insertMany(cardData);

  console.log('cards seeded!');
  process.exit(0);
});

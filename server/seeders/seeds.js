// const faker = require('faker');
const gameSeeds = require('./gameSeed.json');
const consoleSeeds = require('./consoleSeed.json');
const db = require('../config/connection');
const { Console, Game } = require('../models');

db.once('open', async () => {
    await Game.deleteMany({});
    await Console.deleteMany({});

    const games= await Game.insertMany(gameSeeds);
    const consoles= await Console.insertMany(consoleSeeds);
  console.log('all done!');
  process.exit(0);
});

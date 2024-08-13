const sequelize = require("../config/connection");
const userSeed = require('./userSeed');
const postSeed = require('./postSeed');
const commentSeed = require('./commentSeed');



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await userSeed();
  console.log('\n----- user SEEDED -----\n');
  await postSeed();
  console.log('\n----- comment SEEDED -----\n');
  await commentSeed();
  console.log('\n----- comment SEEDED -----\n');

   process.exit(0);
};

seedAll();
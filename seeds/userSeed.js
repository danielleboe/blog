const { User } = require("../models");

const userData = [
  {
    username: "StarryNight42",
    email: "Abdul_Cobb6273@dvqq2.services",
    password: "passsword123#",
  },
  {
    username: "QuantumFalcon",
    email: "Gil_Evans8013@cke3u.info",
    password: "passsword123#",
  },
  {
    username: "MysticEchoes",
    email: "Carina_Flanders881@lyvnc.net",
    password: "passsword123#",
  },
  {
    username: "PixelVoyager",
    email: "Benny_Wilson3790@c2nyu.page",
    password: "passsword123#",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
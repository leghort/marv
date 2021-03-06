const { databasePath } = require("../../utils");
const { Sequelize } = require("sequelize");
const fs = require("fs-extra");
const path = require("path");

fs.ensureDirSync(databasePath);

const sequelize = new Sequelize({
  logging: false,
  dialect: "sqlite",
  storage: path.join(databasePath, "marv.sqlite"),
});

module.exports = sequelize;

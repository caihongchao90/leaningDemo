//初始化 Sequelize。

const dbConfig = require("../config/db.config.js");

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    });

} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ph_bridge = require("./ph_bridge.model.js")(sequelize, Sequelize);
// 同步模型到数据库
db.ph_bridge.sync();

module.exports = db;


//PostgreSQL 连接和 Sequelize 的配置参数。
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "990220",
    DB: "myTestDatabase",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
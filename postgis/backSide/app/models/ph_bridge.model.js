//定义 Sequelize 模型

module.exports = (sequelize, Sequelize) => {
  const ph_bridge = sequelize.define("pinghushiqiaopoint", {
    名称: {
      type: Sequelize.STRING,
      allowNull: true,
      primaryKey: true
    },
    经度: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    纬度: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    位置: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    类别: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    geom:{
      type: Sequelize.GEOMETRY,
    }
  }, {
    tableName: 'ph_bridge',
    timestamps: false
  });

  return ph_bridge;
};
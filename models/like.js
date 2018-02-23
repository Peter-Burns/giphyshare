module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define("like", {});

  Like.associate = function(models) {
    Like.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "CASCADE"
    });
    Like.belongsTo(models.post, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "CASCADE"
    });
  };

  return Like;
};

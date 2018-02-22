module.exports = function(sequelize, DataTypes) {
  var Follower = sequelize.define("follower", {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "userIdfollowerId"
    },
    followerId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "userIdfollowerId"
    }
  });

  Follower.associate = function(models) {
    Follower.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    Follower.belongsTo(models.user, {
      as: "Followers",
      foreignKey: {
        name: "followerId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
  };

  return Follower;
};

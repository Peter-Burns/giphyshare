module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: { type: DataTypes.STRING, primaryKey: true },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.follower);
    User.hasMany(models.follower, {
      foreignKey: "followerId",
      as: "Followers"
    });
    User.hasMany(models.post);
    User.hasMany(models.like);
    User.hasMany(models.subpost);
  };

  return User;
};

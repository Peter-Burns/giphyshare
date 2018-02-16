module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urlStill: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: DataTypes.STRING
  });

  Post.associate = function(models) {
    Post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    Post.hasMany(models.like);
    Post.hasMany(models.subpost);
  };

  return Post;
};
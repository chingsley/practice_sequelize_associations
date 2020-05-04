module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING(),
    content: DataTypes.STRING(),
    userId: DataTypes.INTEGER(),
  });

  Post.associate = ({ User }) => {
    Post.belongsTo(User, { foreignKey: "userId", as: "owner" });
  };

  return Post;
};

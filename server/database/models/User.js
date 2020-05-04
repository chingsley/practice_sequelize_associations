module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstname: DataTypes.STRING(),
    lastname: DataTypes.STRING(),
    companyId: DataTypes.INTEGER(),
  });

  User.associate = (models) => {
    User.hasMany(models.Post, { foreignKey: "userId", as: "posts" });
    User.belongsTo(models.Company, { foreignKey: "companyId", as: "company" });
    User.belongsToMany(models.WorkingDay, {
      through: "UsersWorkingDays",
      foreignKey: "userId",
      as: "workingDays",
    });
  };

  return User;
};

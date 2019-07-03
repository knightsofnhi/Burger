module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
      // Giving the Burger model a name of type STRING
      name: DataTypes.STRING,
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      }
    });
  
    return Burger;
  };
  
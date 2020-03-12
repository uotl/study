'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    deadline: DataTypes.DATE,
    status: {
      type:DataTypes.INTEGER,
      defaultValue:1
    },
    content: DataTypes.STRING
  }, {
    timestamps:true
  });
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};
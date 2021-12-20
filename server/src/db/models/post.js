'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // один пост к одному пользователю
      this.belongsTo(User, {foreignKey: 'userid'});
    }
  };
  Post.init({
    title: DataTypes.TEXT,
    descript: DataTypes.TEXT,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};

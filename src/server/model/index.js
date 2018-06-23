const db = require('./db');

const User = db.Model.extend({
  tableName: 'user',
  idAttribute: 'id'
});

const Image = db.Model.extend({
  tableName: 'image',
  idAttribute: 'id'
});

const Fruit = db.Model.extend({
  tableName: 'fruit',
  idAttribute: 'id',
  hasTimestamps: true
});

module.exports = {
  User,
  Fruit,
  Image
};

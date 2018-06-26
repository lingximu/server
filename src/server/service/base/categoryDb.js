const {Category} = require('@model/index');

/**
 * 通过 id 获取用户信息
 * @param {number} id
 */
function getCategories (id) {
  return Category.fetchAll()
    .then(c => {
      return c.load(['fruits', 'fruits.image']);
    })
    .then(m => {
      if (!m) { return null; } else { return m.toJSON(); }
    });
}

module.exports = {
  getCategories
};

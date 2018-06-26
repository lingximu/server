const assert = require('assert');
const { Cart } = require('@model/index');

/**
 * 通过 id 获取对应 cart 信息
 * @param {*} id
 */
function getCartById (id) {
  assert(id);
  return new Cart({id})
    .fetch({
      withRelated: ['fruits', 'fruits.image', 'fruits.category']
    })
    .then(u => {
      if (!u) { return {}; } else { return u.toJSON(); }
    });
}

module.exports = {
  getCartById
};

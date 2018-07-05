const assert = require('assert');
const { Fruit } = require('@model/index');
const disturbArray = require('@utils/disturbArray');

/**
 * 保存 fruit 信息
 * @param {*} params
 * @param {*} params['image_id'] - 图片对应的 id
 * @param {*} params.name - 水果名字
 * @param {*} params.price - 水果价格
 */
function saveFruit (params) {
  const { image_id, name, price } = params; // eslint-disable-line
  assert(image_id, '必须有图片 id');
  assert(name, '必须有水果名字');
  assert(typeof price === 'number', '价格必须为数字');

  return new Fruit().save(params);
}

/**
 * 通过 id 获取对应 fruit 信息
 * @param {*} id
 */
function getFruitById (id) {
  assert(id);
  return new Fruit({id})
    .fetch({
      withRelated: ['image', 'category']
    })
    .then(u => {
      if (!u) { return {}; } else { return u.toJSON(); }
    });
}

/**
 * 获取 likes 超过一定数量的 fruit
 * @param {number} like - 要超过的 fruit
 */
function getFruitBeyondLikes (like = 0) {
  return Fruit.query(function (qb) {
    qb.where('likes', '>=', like);
  }).fetchAll()
    .then(c => {
      return c.load(['image', 'category']);
    })
    .then(u => {
      if (!u) { return {}; } else { return u.toJSON(); }
    })
    .then(m => {
      m = disturbArray(m);
      return m;
    });
}

module.exports = {
  saveFruit,
  getFruitById,
  getFruitBeyondLikes
};

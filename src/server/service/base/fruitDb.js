const assert = require('assert');
const { Fruit } = require('@model/index');

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

module.exports = {
  saveFruit
};

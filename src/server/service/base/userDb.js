const {User} = require('@model/index');

/**
 * 通过 id 获取用户信息
 * @param {number} id
 */
function getUserById (id) {
  return new User({id}).fetch()
    .then(m => {
      if (!m) { return null; } else { return m.toJSON(); }
    });
}

module.exports = {
  getUserById
};

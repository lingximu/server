require('dotenv').config();
const path = require('path');

module.exports = {
  db: {
    host: process.env.db_host,
    database: process.env.db_database,
    user: process.env.db_user,
    password: process.env.db_password
  },
  private: {
    name: process.env.private_name,
    pass: process.env.private_pass
  },
  proxyParams: {
    name: undefined,
    target: undefined,
    Referer: undefined
  },
  staticRootDir: path.join(process.cwd(), '../lingximu.github.io/')
};

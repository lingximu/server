/**
 * 数据库连接
 */

'use strict';

const config = require('config');
const logger = require('../..server/utils/logger');

const log = logger.createLogger('myRn:src:server:model:db');
const db = config.db;
// db
const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: db.host,
        database: db.database,
        user: db.user,
        password: db.password,
        charset: 'utf8',
    },
    pool: {
        min: 0,
        max: db.poolSize || 10,
    },
    debug: true,
});

log.info(`数据库连接：connect to ${db.host}#${db.database}`);

const db = require('bookshelf')(knex);
db.plugin('pagination');
db.plugin('registry');

module.exports = db
// 配置别名
require('module-alias/register');
const debug = require('debug')('kp:config:index');
const VError = require('verror');
const result = require('dotenv').config();

debug('环境变量1 %o', process.env);
if (result.error) { throw new VError(result.error, 'dotevn解析出错'); } else { console.info('dotevn解析的环境变量 %o', result.parsed); }

process.env.HOSTNAME = result.parsed.HOSTNAME;
debug('环境变量2 %o', process.env);

const config = require('config');
console.log('所有配置 %j', config);
console.log('hostname: %s', config.util.getEnv('HOSTNAME'));

module.exports = config;

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

module.exports = (options) => {

    router.get('/', (ctx, next) => {
      ctx.body = "首页"
    });

    app
      .use(router.routes())

    return app;
}

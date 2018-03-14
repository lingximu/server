var Koa = require('koa');
var Router = require('koa-router');
var path = require('path')
const serve = require('koa-static');
const router = require('./routers')

var app = new Koa();
// var router = new Router();


module.exports = (options) => {


  const root = path.join(process.cwd(), '../lingximu.github.io/')
  app.use(serve(root))

  app.use(router.routes())

  router.get('/**', (ctx, next) => {
    ctx.body = "404"
    ctx.status = 404;
  });
    return app;
}

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = "首页"
});

app
  .use(router.routes())

app.listen(8000)
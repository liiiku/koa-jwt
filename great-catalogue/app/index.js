/**
 * RESTful api项目合理的目录结构
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const routing = require('./routes')
const app = new Koa();

/**
 * 错误处理中间件
 * 404 的错误处理不走中间件，这算是有一个遗憾吧
 * 能够捕获手动抛出的信息、运行时错误信息
 */
app.use(async (ctx, next) => {
  try {
    console.log(1)
    await next();
  } catch(err) {
    console.log(3);
    ctx.status = err.status || err.statusCode || 500;
    ctx.body = {
      message: err.message
    }
  }
});
app.use(bodyParser());
routing(app);

app.listen(3000, () => {
  console.log('程序启动在3000端口了！');
});
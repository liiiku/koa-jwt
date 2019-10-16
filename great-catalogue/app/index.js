/**
 * RESTful api项目合理的目录结构
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const routing = require('./routes');
const app = new Koa();

/**
 * 错误处理中间件
 * 404 的错误处理不走中间件，这算是有一个遗憾吧
 * 能够捕获手动抛出的信息、运行时错误信息
 */
// app.use(async (ctx, next) => {
//   try {
//     console.log(1)
//     await next();
//   } catch(err) {
//     console.log(3);
//     ctx.status = err.status || err.statusCode || 500;
//     ctx.body = {
//       message: err.message
//     }
//   }
// });


app.use(error({
  postFormat: (e, {stack, ...rest}) => {
    return process.env.NODE_ENV === 'production' ? rest : { stack, ...rest };
  }
}));
app.use(bodyParser());
/**
 * 校验参数通常是校验请求体的所以一般放到请求体的后面
 * 这里传入app的原因：可以再ctx中加入方法，就可以再全局中使用
 */
app.use(parameter(app));
routing(app);

app.listen(3000, () => {
  console.log('程序启动在3000端口了！');
});
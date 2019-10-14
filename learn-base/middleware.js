const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next(); // next 是一个异步的函数，返回的是一个promise
  console.log(2);
  ctx.body = 'hello zhihu!';
});

app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
})

app.use((ctx) => {
  console.log(5);
})

app.listen(3000);
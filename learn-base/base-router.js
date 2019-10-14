/**
 * 简单路由的实现
 */
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === '/') {
    ctx.body = '这是主页';
  } else if (ctx.url === '/users') {
    if (ctx.method === 'GET') {
      ctx.body = '这是用户列表页';
    } else if (ctx.method === 'POST') {
      ctx.body = '创建用户';
    } else {
      ctx.status = 405; // 这个方法不允许
    }
  } else if (ctx.url.match(/\/users\/\w+/)) {
    // match 会返回一个数组，第一项是整个url字符串 第二项是匹配到的括号中的内容
    const userId = ctx.url.match(/\/users\/(\w+)/)[1];
    ctx.body = `这是用户${userId}`;
  } else {
    ctx.status = 404;
  }
});

app.listen(3000);
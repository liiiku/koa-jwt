/**
 * 设置响应
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// 前缀
const usersRouter = new Router({ prefix: '/users' });

const db = [{ name: '李雷' }];

router.get('/', (ctx) => {
  ctx.body = '<h1>这是主页</h1>';
})

usersRouter.get('/', (ctx) => {
  /**
   * /users 这个接口既支持get方法，又支持post方法 本来这个是options方法返回的，这里返回也没有问题
   * 设置响应头
   */
  ctx.set('Allow', 'GET, POST');
  ctx.body = db;
})
usersRouter.post('/', (ctx) => {
  db.push(ctx.request.body); // 从请求起中获取
  // 返回新建的对象
  ctx.body = ctx.request.body;
})
usersRouter.get('/:id', (ctx) => {
  // 返回数组中的某一项 字符串-> 数字
  ctx.body = db[ctx.params.id * 1];
})
usersRouter.put('/:id', (ctx) => {
  db[ctx.params.id] = ctx.request.body
  // 修改后的对象
  ctx.body = ctx.request.body;
})
usersRouter.delete('/:id', (ctx) => {
  db.splice(ctx.params.id * 1, 1);
  ctx.status = 204;
})


app.use(bodyParser());
app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods()); // 这样所有接口都支持options方法了

app.listen(3000);
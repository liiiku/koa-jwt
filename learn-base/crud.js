/**
 * 增删改查的响应
 */
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// 前缀
const usersRouter = new Router({
  prefix: '/users'
})

router.get('/', (ctx) => {
  ctx.body = '这是主页';
})

usersRouter.get('/', (ctx) => {
  ctx.body = [
    { name: '李雷' },
    { name: '韩梅梅' },
  ];
})
usersRouter.post('/', (ctx) => {
  // 返回新建的对象
  ctx.body = { name: '李雷' };
})
usersRouter.get('/:id', (ctx) => {
  // 返回数组中的某一项
  ctx.body = { name: '李雷' };
})
usersRouter.put('/:id', (ctx) => {
  // 修改后的对象
  ctx.body = { name: '李雷2' };
})
usersRouter.delete('/:id', (ctx) => {
  ctx.status = 204;
})


app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods()); // 这样所有接口都支持options方法了

app.listen(3000);
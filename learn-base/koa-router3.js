/**
 * 多中间件
 */
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// 前缀
const usersRouter = new Router({
  prefix: '/users'
})

// 多中间件
const auth = async (ctx, next) => {
  console.log(ctx.url);
  if (ctx.url !== '/users') {
    ctx.throw(401);
  }
  await next();
}

router.get('/', (ctx) => {
  ctx.body = '这是主页';
})

usersRouter.get('/', auth, (ctx) => {
  ctx.body = '这是用户列表';
})
usersRouter.post('/', auth, (ctx) => {
  ctx.body = '这是创建用户';
})
usersRouter.get('/:id', auth, (ctx) => {
  ctx.body = `这是用户${ctx.params.id}`;
})


app.use(router.routes());
app.use(usersRouter.routes());

app.listen(3000);
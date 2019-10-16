const db = [{ name: '李雷' }];

class UsersCtl {
  find(ctx) {
    console.log(4);
    a.b
    ctx.body = db;
  }
  findById(ctx) {
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412, '先决条件失败：id大于等于数组长度了');    
    }
    ctx.body = db[ctx.params.id * 1];
  }
  create(ctx) {
    db.push(ctx.request.body);
    ctx.body = ctx.request.body;
  }
  update(ctx) {
    db[ctx.params.id] = ctx.request.body
    ctx.body = ctx.request.body;
  }
  delete(ctx) {
    db.splice(ctx.params.id * 1, 1);
    ctx.status = 204;
  }
}

module.exports = new UsersCtl();
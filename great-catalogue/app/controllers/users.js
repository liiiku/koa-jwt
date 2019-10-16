const db = [{ name: '李雷' }];

class UsersCtl {
  find(ctx) {
    console.log(4);
    a.b
    ctx.body = db;
  }
  findById(ctx) {
    // 手动的校验
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412, '先决条件失败：id大于等于数组长度了');    
    }
    ctx.body = db[ctx.params.id * 1];
  }
  create(ctx) {
    // 校验请求体的name是字符串类型，并且是必选的
    ctx.verifyParams({
      name: { type: 'string', required: true },
      age: { type: 'number', required: false }
    });
    db.push(ctx.request.body);
    ctx.body = ctx.request.body;
  }
  update(ctx) {
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412, '先决条件失败：id大于等于数组长度了');    
    }
    ctx.verifyParams({
      name: { type: 'string', required: true },
      age: { type: 'number', required: false }
    });
    db[ctx.params.id] = ctx.request.body
    ctx.body = ctx.request.body;
  }
  delete(ctx) {
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412, '先决条件失败：id大于等于数组长度了');    
    }
    db.splice(ctx.params.id * 1, 1);
    ctx.status = 204;
  }
}

module.exports = new UsersCtl();
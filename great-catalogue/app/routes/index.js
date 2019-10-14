/**
 * 批量读取一个目录下的文件，并且注册到app上
 * app: koa的实例
 */
const fs = require('fs');
module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') {
      return;
    }
    const router = require(`./${file}`);
    app.use(router.routes()).use(router.allowedMethods());
  })
}
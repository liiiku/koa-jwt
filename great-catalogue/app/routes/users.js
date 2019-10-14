const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
// js的关键字不能用，所以要给delete起一个别名
const { find, findById, create, update, delete: del } = require('../controllers/users');

router.get('/', find);
router.get('/:id', findById);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', del);

module.exports = router;
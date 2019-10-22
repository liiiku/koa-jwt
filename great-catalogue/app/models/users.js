const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  // age: { type: Number, required: false, default: 0 }
});

/**
 * 第一个参数： mongodb中集合的名称 集合：一个用户列表就是一个集合
 * 导出的模型也是一个类
 */
module.exports = model('User', userSchema);
// 一、导入模块
const mongoose = require('mongoose');
// 二、连接数据库
const db = mongoose.createConnection('mongodb://shop2:admin888@localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log('---------------------------------------')
        console.log('数据库连接失败：', err)
        console.log('---------------------------------------')
        return;
    }
    console.log('数据库连接成功');
})

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model = db.model('api', {
    uanme: { type: String, default: "神龙教主" },
    pwd: { type: String },
    // pwd: String,
    age: { type: Number },
    sex: { type: String }
})
e = require('mongoose');
// 二、连接数据库
const db2 = mongoose.createConnection('mongodb://shop2:admin888@localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log('---------------------------------------')
        console.log('数据库连接失败：', err)
        console.log('---------------------------------------')
        return;
    }
    console.log('数据库连接成功');
})

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model2 = db2.model('api', {
    uanme: { type: String, default: "神龙教主" },
    pwd: { type: String },
    // pwd: String,
    age: { type: Number },
    sex: { type: String }
})

// 四、创建实例操作（CURD）

// 读 --------------------------------

// model2.findOne({}) 
model2.find({})
    .then(res => {
        console.log(res)
        db2.close()
        return res
    })
    .catch(err => {
        console.log(err)
        return false
    })
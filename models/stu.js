// 一、导入模块
const mongoose = require('mongoose');
// 二、连接数据库
const db = mongoose.createConnection('mongodb://shop2:admin888@localhost:27017/shop', {useNewUrlParser: true, useUnifiedTopology: true}, err=>{
    if(err){
        console.log('---------------------------------------')
        console.log('数据库连接失败：', err)
        console.log('---------------------------------------')
        return; 
    }
    console.log('数据库连接成功');
})

// 三、设置数据模型（声明是哪个集合，限制字段个数和字段类型）
const model = db.model('stu',{
	uname:{type:String, default:"an"},
	age:{type: Number},
	sex:{type:String}
})

const createModel=(postData)=>{
    const insertObj=new model(postData)
    return insertObj.save()
    .then(res=>{
        console.log(res)
        return res
    })
    .catch(err => {
        console.log('插入失败' + err)
        return false
    })
    
}
const listModel=(skipNum,limitNum)=>{
    return model.find().skip(skipNum).limit(limitNum)
    .then(res=>{
        return res
    })
    .catch(err => {
        console.log('查询失败' + err)
        return false
    })
    
}
//四。方法
module.exports={
    createModel,
    listModel,
}
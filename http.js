//1.引入express模块
const express=require('express')
//2.创建app对象，通过express（）底层原理http模块的createServer
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
//3.路由，语法 app。HTTP请求方式（路径，回调函数）
app.get('/',(req,res)=>{
    //send是express用来响应数据
    res.send('hello world')
})
const stuContoller=require(process.cwd()+'/controller/stu')
//学生添加
app.post('/stu',stuContoller.create)
//学生列表
app.get('/stu',stuContoller.index)
//4.启动服务监听端口
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})
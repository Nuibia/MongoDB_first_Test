//导入模型
const {
    createModel,
    listModel
} = require(process.cwd() + '/models/stu')

//定义处理方法
const create = async (req, res) => {
    //res.send('this is stu create')
    //1.接收数据
    let postData = req.body
    //过滤
    //操作数据库
    let rs = await createModel(postData)
    //4.判断返回
    if (rs) {
        res.send({
            meta: {
                state: 200,
                msg: "添加成功"
            },
            data: null
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: "添加失败"
            },
            data: null
        })
    }
}
/**
 * @api {get} /stu 学生模块列表
 * @apiName Add
 * @apiGroup Stu
 *
 * @apiParam {Number} pageno 当前页
 * @apiParam {Number} pagesize 每页返回条数
 *
 * @apiSuccess {String} meta 状态码&提示信息
 * @apiSuccess {String} data  数据
 */
//学生列表
const index=async (req,res)=>{
    // res.send('this is index')
    //1。接收数据
    let getData=req.query
    let skip=(parseInt(getData.pageno)-1)*parseInt(getData.pagesize)
    //1.获取数据
    let data=await listModel(skip,parseInt(getData.pagesize));
    //2.响应数据
    res.send({
        meta: {
            state: 200,
            msg: "查询成功"
        },
        data: data
    })
}
//学生列表分页
//导出
module.exports = {
    create,
    index,
}
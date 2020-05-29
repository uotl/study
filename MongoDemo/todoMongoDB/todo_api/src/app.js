const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const models = require('../db/models');
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended:true}));

app.all("/*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1');
  next();
})

const todoController = require('../controller/index')

// 创建
app.post('/create',todoController.create)
// 查询list
app.get('/list/:status/:page',todoController.list)
// 编辑内容
app.post('/update',todoController.update)
// 编辑状态
app.post('/update_status',todoController.updateStatus)



// 修改状态   -1全部  1待办  2完成  3删除
// app.post('/update_status',async (req,res,next)=>{
//   try {
//     let {id, status} = req.body;
//     let todo = await models.Todo.findOne({
//       where:{
//         id
//       }
//     })
//     if(todo && status != todo.status){
//       // 有数据才更新
//       todo = await todo.update({
//         status
//       })
//     }
//     res.json({
//       todo
//     })
//   } catch (error) {
//     next(error)
//   }
// })



app.use((err,req,res,next)=>{
  if(err){
    res.status(500).json({
      message:err.message
    })
  }
})

app.listen(3000,()=>{
  console.log("启动成功");
})
const {
  createModel,
  updateModel,
  listsModel,
  updateStatusModel
} = require('../models/index')

const create = async (req,res)=> {
  let postdata = req.body;
  let rs = await createModel(postdata)
  if(rs){
    res.send({
      postdata,
      message:"创建成功"
    })
  }else{
    res.send('添加失败')
  }
}

const list = async (req,res)=> {
  let getdata = req.params;
  let skip = (parseInt(getdata.page)-1)*10
  let data = await listsModel(skip);
  res.send({
    data,
    message:'列表查询成功'
  })
}

const update = async (req,res)=> {
  let postdata = req.body;
  let rs = await updateModel(postdata)
  if(rs){
    res.send({
      postdata,
      message:"编辑成功"
    })
  }else{
    res.send('编辑失败')
  }
}

const updateStatus = async (req,res)=>{
  let postdata = req.body;
  let rs = await updateStatusModel(postdata)
  if(rs){
    res.send({
      postdata,
      message:"编辑成功"
    })
  }else{
    res.send('编辑失败')
  }
}

module.exports = {
  create,
  update,
  list,
  updateStatus
} 
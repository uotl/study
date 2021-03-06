const mongoose = require('mongoose');


// 链接数据库
const db = mongoose.connect('mongodb://localhost/todolists')
.then(
  ()=>{
    console.log("链接成功");
  },
  err => {
    console.log("链接失败"+err);
  }
)

// 创建模型
const model = mongoose.model('list',{
  name:String,
  content:String,
  deadline:{ type: String, default: Date.now },
  status:{ type: Number, default: 1 }
})

const createModel = (postdata)=>{
  const insertObj = new model(postdata);
  return insertObj.save()
  .then(res=> {
    return res
  })
}

const listsModel = (skip)=> {
  return model.find().skip(skip).limit(10)
  .then(res => {
    return res
  }) 
}

const updateModel = (postdata)=>{
  return model.update({_id:postdata._id},postdata)
  .then(res => {
    return res
  })
}

const updateStatusModel = (postdata)=>{
  console.log(postdata);
  
  return model.update({_id:postdata.id},{$set: { status: postdata.status }})
  .then(res => {
    return res
  })
}

module.exports = {
  createModel,
  listsModel,
  updateModel,
  updateStatusModel
}


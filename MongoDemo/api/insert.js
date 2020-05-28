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
const model = mongoose.model('user',{
  name:String,
  age:Number,
  sex:String
})

// 增数据
const insertObj = new model({
  name:'Blues',
  age:24,
  sex:'男'
})
insertObj.save()
.then(res => {
  console.log(res);
  db.close();
  return res;
})
.catch(err => {
  console.log(err);
  return false;
})

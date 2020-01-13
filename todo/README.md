## 项目启动
1. 启动node  进入todo_api 目录 运行  npm run dev
2. 启动vue  进入todo_web 目录 运行 vue ui

## 需求说明，api说明
1. 根据客户端传递不同的参数（状态/页码） 查询  任务列表
2. 新增任务 （名称/截止日期/内容）
3. 编辑：（名称/截止日期/内容/id）
4. 删除 （id）
5. 修改任务状态 （id/状态-待办/完成/删除）

## 数据库初始化
1. 创建数据库
2. 使用 `sequelize cli` 初始化 项目的 数据库配置信息
    `npx sequelize init`
3. 生成模型文件
  1. migrate 文件
  2. model 文件
  `npx sequelize model:generate --name Todo --attributes name:string,deadline:date,content:string`
4. 持久化，模型对应的数据库表
  `npx sequelize db:migrate`


## api具体使用ORM模型



##  回顾

## 技术栈回顾
1. node  http
2. web框架   express 
3. mysql 
4. ORM框架   sequelize

## 技术关键点
1. api --   web --》 webserver --》 router --》 hander --》 orm实例化 --》 db


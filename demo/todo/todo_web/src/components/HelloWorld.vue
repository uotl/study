<template>
<div class="">
  <el-table
    ref="filterTable"
    :data="tableData.rows"
    style="width: 100%;">
    <el-table-column
      prop="id"
      label="名称"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      width="280"
      label="内容">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      :formatter="formatter"
      :filters="[{ text: '全部', value: '-1' },{ text: '待办', value: '1' }, { text: '完成', value: '2' }, { text: '删除', value: '3' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      width="100">
    </el-table-column>
    <el-table-column
      prop="deadline"
      label="截止日期"
      width="220"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
        v-show="scope.row.status != 3"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
          v-show="scope.row.status === 1"
          size="mini"
          type="primary"
          @click="handleChange(scope.$index, scope.row)">待办</el-button>
          <el-button
          v-show="scope.row.status === 2"
          size="mini"
          type="success"
          @click="handleChange(scope.$index, scope.row)">完成</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  @current-change="currentPage"
  :total="tableData.count">
</el-pagination>
</div>
  
</template>

<script>
import {todoList,update_status} from '@/utils/api';
export default {
  name: 'HelloWorld',
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getLists(-1);
  },
  methods: {
    async getLists (status) {
      let data1 = await todoList('/'+status+'/1')
      this.tableData = data1.list;
    },
    handleEdit(index, row) {
      this.$parent.editTodo(row)
    },
    handleChange(index, row) {
      let _status = row.status == 1 ? '2' : '1';
      this.changestatus(row.id,_status)
    },
    handleDelete(index, row) {
      this.changestatus(row.id,3)
    },
    // 更改状态
    async changestatus(id,status) {
      let params = {
        id,
        status
      }
      await update_status(params)
      this.getLists(-1);
    },
    filterTag(value, row) {
      if(value == -1){
        return row;
      }else{
        return row.status == value;
      }
    },
    formatter(row, column) {
      if(row.status == 1){
        return '待办'
      }
      if(row.status == 2){
        return '完成'
      }
      if(row.status == 3){
        return '删除'
      }
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    async currentPage(e) {
      let data = await todoList('/-1/'+e)
      this.tableData = data.list;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped style="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-table{
  min-height: 600px;
}
.el-pagination{
  margin-top: 10px;
}
</style>

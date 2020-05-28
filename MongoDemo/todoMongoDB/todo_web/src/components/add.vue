<template>
  <div class="addBox">
    <el-drawer
      title="新增todo"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <div class="alertBox">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="24">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.deadline" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="活动内容">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="changeStatus">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import {addTodo} from '@/utils/api';
export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      form: {
        name: '',
        deadline: '',
        content: ''
      }
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    changeStatus() {
      this.drawer = !this.drawer;
    },
    async onSubmit() {
      await addTodo(this.form)
      this.changeStatus();
      this.$parent.refreshLists()
    },
    editTodo(data){
      this.form = data;
      this.changeStatus();
    }
  }
};
</script>

<style lang="scss" scoped>
.alertBox{
  box-sizing: border-box;
  padding: 30px;
}
</style>
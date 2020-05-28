<template>
  <div id="app">
    <div style="text-align:left;">
      <el-button type="primary" @click="addTodo">新增</el-button>
    </div>
    <add ref="add"/>
    <HelloWorld ref="lists"/>
    <edit ref="edit"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import add from './components/add.vue'
import edit from './components/edit.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    edit,
    add
  },
  methods:{
    // 新增todo
    addTodo() {
      this.$refs.add.changeStatus();
    },
    // 编辑todo
    editTodo(data) {
      this.$refs.edit.editTodo(data);
    },
    // 刷新list
    refreshLists() {
      this.$refs.lists.getLists(-1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

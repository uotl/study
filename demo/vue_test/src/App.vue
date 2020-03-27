<template>
<div>
  <!-- Vue项目时为什么要在列表组件中写 key，其作用是什么？ -->
  <!-- <lists></lists> -->

  <!-- 防抖节流 -->
  <debouncethrottle></debouncethrottle>
</div>
</template>

<script>
import lists from './components/lists'
import debouncethrottle from './components/debounce_throttle'
export default {
  name: 'app',
  components: {
    lists,
    debouncethrottle
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods:{
    
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
ul,li{
  list-style: none;
}
</style>

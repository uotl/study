<template>
<div class="box">
  <input type="text" v-model="inputText" @input="inputFunction">
   <ul>
    <li></li>
    <li></li>
  </ul> 
</div>
</template>

<script>
// 防抖
function debounce(fn, awaits=500) {
  let timeout = null;
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
      fn.call(this,arguments)
    },awaits)
  }
}

// 节流--定时器
function throttle(fn, awaits=500) {
  let canrun = true;
  return function() {
    if(!canrun){
      return;
    }
    canrun = false;
    setTimeout(() => {
      fn.call(this,arguments)
      canrun = true;
    }, awaits);
  }
}

// 节流--时间戳
function throttle1(fn, awaits=500) {
  let newdate = Date.now();
  return ()=>{
    let curdate = Date.now();
    if(curdate - newdate >= awaits){
      fn.call(this,arguments)
      newdate = Date.now();
    }
  }
}

// 节流--时间戳+定时器
function throttle2(fn, awaits=500) {
  let newdate = Date.now();
  let timeout = null;
  return ()=>{
    clearTimeout(timeout)
    let curdate = Date.now();
    if(curdate - newdate >= awaits){
      fn.call(this,arguments)
      newdate = Date.now();
    }else{
      timeout = setTimeout(() => {
        fn.call(this,arguments)
      }, awaits);
    }
  }
}

export default {
  name: 'debouncethrottle',
  data() {
    return {
      inputText:''
    };
  },
  methods: {
    test:function () {
      console.log(Math.random());
    },
    inputFunction:debounce(function(e){
      console.log(this.inputText)
    })
  },
  mounted() {
    let _this = this;
    window.addEventListener('scroll', throttle2(_this.test));
  }
}
</script>

<style scoped>
ul li{
  display: block;
  width: 100px;
  height: 620px;
  margin-bottom: 20px;
  background: orange;;
}
</style>
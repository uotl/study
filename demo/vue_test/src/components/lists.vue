<template>
  <div id="lists">
      <p @click="add">添加</p>
      <ul>
        <li v-for="(data,index) in listData">
            <input type="checkbox"> {{data.title}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'lists',
  data() {
    return {
      listData: [
        {id: 1,title: "麻辣香锅"},
        {id: 2,title: "油焖大虾"},
        {id: 3,title: "焦糖玛奇朵"},
        {id: 4,title: "黑糖玛奇朵"}
      ],
      addId:4
    };
  },
  methods: {
    add() {
      this.listData.unshift({id: ++this.addId,title: "黑糖玛奇朵黑糖玛奇朵"})
    }
  }
}
</script>

<style scoped style="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
</style>

<template>
  <div id="list">
    <div class="item" v-for="(item, idx) in list" :key="idx">
      <Checkbox v-model="item.completed" @on-change="handleChange($event , item.id)"></Checkbox>
      <span>{{item.content}}</span>
      <Button type="error" @click="getDeleteIndex(item.id)">delete</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    toggle: Function,
    delete: Function
  },
  setup (props, context) {
    function handleChange (e , id) {
      context.emit('toggle', {e, id})
    }
    function getDeleteIndex (id) {
      context.emit('delete', id)
    }
    return {
      handleChange,
      getDeleteIndex
    }
  }
}
</script>

<style>
#list{
  width: 100%;
  margin-bottom: 20px;
}
.item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>

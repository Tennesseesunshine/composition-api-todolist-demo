<template>
  <div id="app">
    <div class="container">
      <Input @submit="submit"/>
      <Status @change="handleSingleChange"/>
      <List :list="toDoList" @toggle="toggleCheckoutStatus" @delete="deleteByIndex"/>
    </div>
  </div>
</template>

<script>
// 对所有数据操作都是list computed自动计算
import Input from '../src/components/Input'
import List from '../src/components/List'
import Status from '../src/components/Status'
import { reactive, computed, toRefs } from '@vue/composition-api'
export default {
  setup () {
    const data = reactive({
      list: [],
      btnStatus: '所有',
      toDoList: computed(() => {
        if (data.btnStatus === '所有') {
          return data.list
        } else if (data.btnStatus === '已完成') {
          // eslint-disable-next-line
          // console.log('data.list', data.list)
          return data.list.filter(e => e.completed)
        } else if (data.btnStatus === '未完成') {
          return data.list.filter(e => !e.completed)
        }
      })
    })
    function submit (content) {
      data.list.push({
        completed: false,
        content,
        id: parseInt(Math.random(0, 1) * 100000)
      })
    }
    function handleSingleChange (e) {
      data.btnStatus = e
    }
    function toggleCheckoutStatus (p) {
      // eslint-disable-next-line
      // console.log('app', p)
      data.list.forEach(e => {
        if (e.id === p.id){
          e.completed = p.e
        }
      })
    }
    function deleteByIndex (id) {
      let index = 0
      data.list.forEach((e, i) => {
        if (e.id === id) {
          index = i
        }
      })
      // eslint-disable-next-line
      console.log('index', index)
      data.list.splice(index, 1)
    }
    return {
      ...toRefs(data),
      submit,
      handleSingleChange,
      toggleCheckoutStatus,
      deleteByIndex
    }
  },
  components: {
    Input,
    List,
    Status
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
#app .container {
  width: 500px;
}
</style>

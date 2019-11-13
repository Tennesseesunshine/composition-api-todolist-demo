<template>
  <div id="input">
    <Input v-model="inputValue" placeholder="Enter something..." @keyup.enter.native="enterValue"/>    
  </div>
</template>

<script>
import {reactive, toRefs} from '@vue/composition-api'
export default {
  setup (props, context) {
    const data = reactive({
      inputValue: ''
    })
    function enterValue () {
      data.inputValue && context.emit('submit', data.inputValue)
      data.inputValue = ''
    }
    return {
      ...toRefs(data),
      enterValue
    }
  }
}
</script>

<style>
#input {
  width: 100%;
  margin-bottom: 20px;
}
</style>

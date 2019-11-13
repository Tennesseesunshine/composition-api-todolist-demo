<template>
  <div id="status">
    <RadioGroup v-model="status" @on-change="handelChange">
      <Radio label="所有"></Radio>
      <Radio label="已完成"></Radio>
      <Radio label="未完成"></Radio>
    </RadioGroup>
  </div>
</template>

<script>
import {reactive, toRefs} from '@vue/composition-api'
export default {
  setup (props, context) {
    const data = reactive({
      status: '所有'
    })
    function handelChange (e) {
      // eslint-disable-next-line
      console.log(e)
      context.emit('change', e)
    }
    return {
      ...toRefs(data),
      handelChange
    }
  }
}
</script>

<style>
#status {
  width: 100%;
  margin-bottom: 20px;
}
#status .ivu-radio-group {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<template>
  <div>
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

function mutallip () {
  const name = 'muzat'
  return {
    name,
  }
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...mutallip(),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>

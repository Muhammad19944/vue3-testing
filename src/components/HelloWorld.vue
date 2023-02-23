<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  msg: {
		type: String
  }
})

const number = ref(42)
const text = ref("Just text")

defineExpose({
  number
})
</script>

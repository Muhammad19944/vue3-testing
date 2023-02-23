<template>
  <div>
    <h1>Template Ref</h1>

    <input :ref="(el) => inputRef(el)">

    <hello-world
      ref="buttonRef"
      msg="Hello world !!!"
    />
  </div>
</template>

<script setup>
import { ref, unref, onMounted, nextTick } from "vue"
import HelloWorld from "@/components/HelloWorld.vue"

const buttonRef = ref(null)

nextTick(() => {
	let unrefButton = unref(buttonRef)

	console.log(unrefButton.number, buttonRef.value.number)
})

function inputRef(value) {
	console.dir(value);
}

// onMounted(() => {
// 	console.log(buttonRef.value.number)
// })
</script>

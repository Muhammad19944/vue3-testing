<template>
  <div>
    <h1>Computed</h1>

    <template v-for="item in books">
      <div>{{ item }}</div>
    </template>

    <hr>

    <template v-for="item in booksList">
      <div>{{ item }}</div>
    </template>

    <br>

    <div>Books count - {{ booksCount }}</div>
    <div>Books count ref - {{ booksCountRef }}</div>

    <button @click="pushToList">Push</button>
    <button @click="countList">Count book list</button>
    <button @click="countListRef">Count book list ref</button>
  </div>
</template>

<script setup>
import { reactive, computed, onUpdated, onMounted, ref } from "vue"

const author = reactive({
	name: 'John Doe',
	books: [
		'Vue 2 - Advanced Guide',
		'Vue 3 - Basic Guide',
		'Vue 4 - The Mystery'
	]
})

const booksCountRef = ref(3)

let booksCount = author.books.length

let booksList = [
	'Vue 2111 - Advanced Guide',
	'Vue 3111 - Basic Guide',
	'Vue 4111 - The Mystery'
]

let books = computed(() => author.books)

function pushToList() {
	author.books.push("Vue 5 - Awesome )")
	booksList.push("Vue 5111 - Awesome )")
}

function countList() {
	booksCount++
}

function countListRef() {
	booksCountRef.value++
}

onUpdated(() => console.log('updated'))
onMounted(() => console.log('mounted'))
</script>

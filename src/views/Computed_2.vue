<template>
  <div>
    <h1>Computed 2</h1>

    <template v-for="item in books">
      <div>{{ item }}</div>
    </template>

    <div>Books - {{ booksToggle }}</div>
    <div>Books with function - {{ booksToggleFunction() }}</div>

    <button @click="pushBooks">Push books</button>
    <button @click="booksToggleFunction">Push books with function</button>

    <hr />

    <template v-for="item in users">
      <div>{{ item }}</div>
    </template>

    <div>Users - {{ usersToggle }}</div>
    <div>Users with function - {{ usersToggleFunction() }}</div>

    <button @click="pushUsers">Push users</button>
    <button @click="usersToggleFunction">Push users with function</button>
  </div>
</template>

<script setup>
import { reactive, onUpdated, computed } from "vue"

const books = reactive([
	// 'Vue 2 - Advanced Guide',
	// 'Vue 3 - Basic Guide',
	// 'Vue 4 - The Mystery'
])

let booksToggle = computed(() => books.length > 0 ? "Yes" : "No")

function pushBooks() {
	console.log('books')
	books.push("Vue 5 - Awesome :)")
}

function booksToggleFunction() {
	console.log('books function')
	return books.length > 0 ? "Yes" : "No"
}

// ****************************************************

const users = reactive([
	// 'User 1',
	// 'User 2',
	// 'User 3',
	// 'User 4',
])

let usersToggle = computed(() => users.length > 0 ? "Yes" : "No")

function pushUsers() {
	console.log('user')
	users.push("User 5 - Awesome :)")
}

function usersToggleFunction() {
	console.log('user function')
	return users.length > 0 ? "Yes" : "No"
}

onUpdated(() => console.log("updated"))
</script>

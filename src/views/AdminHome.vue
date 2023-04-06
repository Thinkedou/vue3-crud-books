<script setup>
import { onBeforeMount,ref } from 'vue';
import axios from 'axios'

const allBooks = ref([])

const fetchAllBooks = async ()=>{
    const books = await axios.get('http://localhost:3000/books/')
    console.log(books.data)
    allBooks.value = books.data
}

onBeforeMount(async ()=>{
    await fetchAllBooks()
})





</script>

<template>
    <h3>ADMIN HOME</h3>
</template>
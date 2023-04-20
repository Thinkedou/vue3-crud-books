<script setup>
import {ref,onBeforeMount} from 'vue'
import { useRoute,useRouter } from 'vue-router';
import axios from 'axios'
const route = useRoute()
const router = useRouter()

const oneBook = ref({})

const updateId = route.params.bookId

const fetchOneBook = async ()=>{
    const fetchOneBook = await axios.get('http://localhost:3000/books/'+updateId)
    console.log(fetchOneBook.data,fetchOneBook.status)
    oneBook.value = fetchOneBook.data
}

const updateBook = async ()=>{
    const tryToUpdate = await axios.put(
        'http://localhost:3000/books/'+updateId,
         oneBook.value
        )
        router.push({name:'homeAdmin'})
    console.log(tryToUpdate)
}

onBeforeMount(async ()=>{
    await fetchOneBook()
})


</script>

<template>
    <h3>Update de {{oneBook.title}}✨</h3> 

    <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Author</label>
        <input type="text" class="form-control" v-model="oneBook.author">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Title</label>
        <input type="text" class="form-control" v-model="oneBook.title">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Cover</label>
        <input type="text" class="form-control" v-model="oneBook.cover">
    </div>
    <button type="button" class="btn btn-primary" @click="updateBook">Mettre à jour</button>
</form>
 
</template>
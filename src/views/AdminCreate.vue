<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

const title  = ref('')
const author = ref('')
const cover  = ref('')

const router = useRouter()

const addNewBook = async ()=>{
    console.log('je vais envoyer en POST:   ')
    // console.log(title.value,author.value,cover.value)
    const newBook = {
        title:title.value,
        author:author.value,
        cover:cover.value
    }
    console.log(newBook)
    const tryToAdd = await axios.post('http://localhost:3000/books',newBook)
    if(tryToAdd.status==200){
        router.push({name:'homeAdmin'})
    }else{
        console.warn(tryToAdd.statusText)
    }
}

</script>

<template>
    <h3>Add a new book✨</h3> 

    <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Author</label>
        <input type="text" class="form-control" v-model="author">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Title</label>
        <input type="text" class="form-control" v-model="title">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Cover</label>
        <input type="text" class="form-control" v-model="cover">
    </div>
    <button type="button" class="btn btn-primary" @click="addNewBook">Ajouter</button>
</form>
 
</template>
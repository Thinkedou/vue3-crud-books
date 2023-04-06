<script setup>
import { onBeforeMount,ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'

const allBooks = ref([])
const router = useRouter()


const fetchAllBooks = async ()=>{
    const books = await axios.get('http://localhost:3000/books/')
    allBooks.value = books.data
}

const createBtn = ()=>{
    router.push({name:'adminCreate'})
}





onBeforeMount(async ()=>{
    await fetchAllBooks()
})


</script>

<template>
    <h3>Admin Books</h3> 
    <button type="button" class="btn btn-primary mb-4" @click="createBtn"><i class="fa fa-plus-square mr-2 " aria-hidden="true"></i>New book</button>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="books in allBooks">
                <th scope="row">{{ books.id }}</th>
                <td>{{ books.title }}</td>
                <td>{{ books.author }}</td>
                <td>
                    <button type="button" class="btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    <button type="button" class="btn btn-danger ml-2"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
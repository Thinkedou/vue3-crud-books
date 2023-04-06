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
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>
        <button type="button" class="btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-danger ml-2"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </td>
    </tr>
  </tbody>
</table>
</template>
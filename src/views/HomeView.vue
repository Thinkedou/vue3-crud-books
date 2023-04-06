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
    <section class="tm-margin-b-l">
                    <header>
                        <h2 class="tm-main-title">Welcome to our bookstore</h2>    
                    </header>
                    
                    <p>Shelf HTML template is provided by Tooplate. Please tell your friends about it. Thank you. Images are from Unsplash website. In tincidunt metus sed justo tincidunt sollicitudin. Curabitur magna tellus, condimentum vitae consectetur id, elementum sit amet erat.</p>
                    
                    <div class="tm-gallery">
                        <div class="row">

                        {{ allBooks }}


                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-01.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    
                                    <p class="tm-figcaption">Nam vitae odio</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-02.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Integer ornare</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-03.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Cras non augue</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-04.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Dolor lacus</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-05.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Quisque velit</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-06.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Suspendisse suscipit</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-07.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Facilisis justo</p>
                                </a>
                            </figure>
                            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                <a href="preview.html">
                                    <div class="tm-gallery-item-overlay">
                                        <img src="img/image-08.jpg" alt="Image" class="img-fluid tm-img-center">
                                    </div>
                                    <p class="tm-figcaption">Vivamus facilisis</p>
                                </a>
                            </figure> 
                        </div>   
                    </div>
                    
                    <nav class="tm-gallery-nav">
                        <ul class="nav justify-content-center">
                            <li class="nav-item"><a class="nav-link active" href="#">1</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">2</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">3</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">4</a></li>                    
                        </ul>
                    </nav>
    </section>
</template>
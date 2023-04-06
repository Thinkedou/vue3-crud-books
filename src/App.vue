<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="container">
            <TheHeader />
            
            <div class="tm-main-content">
            
                <router-view></router-view>

            </div>

            <footer>
                Copyright &copy; <span class="tm-current-year">2018</span> Shelf Company             
            </footer>    
        </div>
</template>

<style scoped>
</style>

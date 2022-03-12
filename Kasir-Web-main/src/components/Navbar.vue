<template>
<nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
    <a class="navbar-brand" href="#"> <b>Makanyuk</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/menu">Menu</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/keranjang">Keranjang
            <i class="bi-cart"></i>
            <span class="badge bg-success " style="margin-left:10px" >{{ update ? update.length : jumlah_pesanan.length}}</span>
          </router-link>
        </li>
    
      </ul>
     
    </div>
  </div>

</nav>
</template>

<script>
import axios from "axios"
export default {
  name: "navbar",
  props: ['update'],
  data(){
    return{
      jumlah_pesanan: [],
    }
  },
  methods: {
    setjumlah(data){
      this.jumlah_pesanan = data
    }
  },
  mounted(){
    axios
    .get('https://backkasir.herokuapp.com/keranjangs/')
      .then((response)=> this.setjumlah(response.data))
      .catch((error) => console.log(error))
  }
}
</script>

<style>

</style>
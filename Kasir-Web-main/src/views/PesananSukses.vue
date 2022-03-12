<template>
<div class="pesanan-sukses">
      <Navbar />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col text-center">
                <img src="done.png" alt="" width="250">
                <h1><strong>Sukses!!!</strong></h1>
                 <h4>Pesanan anda segera diproses <br>Silakan Menunggu</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name:"pesanan-sukses",
    components: {
        Navbar,
    }

}
</script>

<style>

</style>
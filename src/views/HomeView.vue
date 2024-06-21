<template>
  <div class="home ">
    <header class="d-flex justify-content-center align-items-center ">
      <h1 class="my-5 py-5">Bienvenidos al Rincón de la Cocina </h1>
    </header>
    <main>
      <h3>
         Una nueva receta cada día 
      </h3>
      <p> Registrate  para ingresar y descubrir la receta del dia </p>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.home{
  background-image: url(../assets/cocina.jpg);
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  object-fit: cover;
}
h1{
  font-weight: 500;

}

</style>

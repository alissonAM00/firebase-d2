<template>
  <div class="priv col-8">
    <header> <h1>Tú Receta del día</h1></header>
    <main class="my-5">
        <img src="../assets/mojito.jpg" alt="mojito">
    </main>
   
  </div>
</template>

<script>
export default {
  name: "privView.vue",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {},
  // watch: {},
  // components: {}
  // mixins: [],.
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.priv {
  background-image: url(../assets/receta.jpeg);
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  object-fit: cover;
}

</style>
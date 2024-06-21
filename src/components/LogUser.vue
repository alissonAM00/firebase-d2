<template>
  <div class="logUser">
      <h1 class="text-center">Ingresa</h1>
      <div class="container" >      
        <form @submit.prevent="login">
          <div class="my-2">
              <label for="email" class="fw-bold">Correo</label>
              <input type="email" name="email" id="email" class="form-control"
                  placeholder="jp@gmail.com" required v-model="email" autocomplete="username">
          </div>
          <div class="my-2">
              <label for="password" class="fw-bold">Contraseña</label>
              <input type="password" name="password" id="password"
                  class="form-control" placeholder="******" required
                  v-model="password" autocomplete="current-password">
          </div>
          <div class="my-2">
              <button type="submit" class="btn btn-warning">Iniciar
                  sesión</button>
          </div>
      </form></div>

  </div>
</template>

<script>
export default {  
    name: 'LogUser',
    // props: {},
    data: function(){
        return {
          email: '',
          password: ''
        }
    },
    // computed: {},
    methods: {
      async login() {
            if (!this.email, !this.password) {
                return alert("Completa todos los datos.");
            }
            let newUser = {
                email: this.email,
                password: this.password
            }
            this.$emit("login", newUser)

            this.$router.push("/");
        },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .logUser{
        background-image: url(../assets/ingresa.jpg);
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  object-fit: cover;
    }
</style>
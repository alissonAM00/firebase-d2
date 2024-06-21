<template>
  <div class="newUser">
    <h1 class="text-center py-4">Regístrate</h1>
    <div class=" container"> <form @submit.prevent="register">
      <div class="my-2">
        <label for="email" class="fw-bold">Correo</label>
        <input type="email" name="email" id="email" class="form-control"
          placeholder="jp@gmail.com" required v-model="email" autocomplete="username" >
      </div>
      <div class="my-2">
        <label for="password" class="fw-bold">Contraseña</label>
        <input type="password" name="password" id="password"
          class="form-control" placeholder="******" required autocomplete="new-password" v-model="password">
      </div>
      <div class="my-2">
        <label for="repeatPassword" class="fw-bold">Ingresa nuevamente tu
          contraseña</label>
        <input type="password" name="repeatPassword" id="repeatPassword"
          class="form-control" placeholder="******" required
          v-model="repeatPassword" autocomplete="new-password" >
      </div>
      <div class="my-2">
        <button type="submit" class="btn btn-success">Registrarse</button>
      </div>
    </form></div>
  </div>
</template>

<script>
export default {
  name: "NewUser",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    }
  },
  methods: {
    register() {
      if (!this.email, !this.password, !this.repeatPassword) {
        return alert("Debes ingresar todos los valores.");
      }
      if (this.password !== this.repeatPassword) {
        return alert("Las contraseñas no coinciden")
      }

      let newUser = {
        email: this.email,
        password: this.password
      }
      this.$emit("submit", newUser)

      this.$router.push("/login");
    },
  },


}
</script>

<style scoped>
.newUser{
  background-image: url(../assets/registro.jpeg);
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  object-fit: cover;  
}

</style>
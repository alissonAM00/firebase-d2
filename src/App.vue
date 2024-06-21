<template>
  <nav class="navbar justify-content-evenly ">
  <router-link to="/">Home</router-link> 
  <router-link to="/login" v-if="!user">Ingresa</router-link> 
  <router-link to="/signup" v-if="!user" >Registrate</router-link>
  <router-link to="/priv" v-if="user">Privado</router-link>  
  <a href="" @click.prevent="logout" v-if="user">Logout</a>
  </nav>

  <router-view/>
</template>

<script>
import {mapState}  from "vuex"
import {auth, signOut}  from "@/Auth"
export default {
  name: 'App',
  computed:{
    ...mapState(['user'])
  },
  methods:{
    async logout(){
      await signOut(auth)
      alert("Tú sesión ha sido cerrada exitosamente") 
      this.$router.push("/")
    }
  }


}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgba(250, 155, 146, 0.7);
  height: 100px;
 

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

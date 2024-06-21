<template>
  <div class="signup">
    <h1>
      
    </h1>
    <NewUsers @submit="register" />
  </div>
</template>

<script>
import NewUsers from '../components/NewUsers.vue'
import { auth, createUserWithEmailAndPassword, } from '@/Auth'

export default {
  name: 'SignupView',
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    }
  },
  components: {
    NewUsers,
  },
  methods: {
    async register(form) {
      try {
        let result = await createUserWithEmailAndPassword(auth, form.email,
          form.password)
        console.log(result);
        alert("Te registraste exitosamente")
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
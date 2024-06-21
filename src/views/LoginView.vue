<template>
    
  <LogUser
  @login="login"/>
</template>

<script>
import LogUser from '../components/LogUser.vue'
import {auth, signInWithEmailAndPassword} from "../Auth"
export default {
    name: 'LoginView',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        async login (form){
            try {
    let result = await signInWithEmailAndPassword (auth,form.email, form.password)
       console.log (result) 
       alert(" ingresaste exitosamente")
    } catch (error) {
       alert("los datos no coinciden, verifica los datos que ingresaste")
    }
        }
    },
    // watch: {},
    components: {
        LogUser
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

    
</style>
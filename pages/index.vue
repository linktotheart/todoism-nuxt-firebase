<template>
      <div>
      <h1>
        Hellow world 
      </h1>
          <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p>



       <v-btn @click="$router.push('/auth/logout')">
         Logout 
       </v-btn>
      </div>
      

</template>

<script>
import AppBar from '~/components/AppBar.vue'

export default {
  components: {
  AppBar,
  },
  methods: {
    logout() {

    }
  },
  layout: 'App',

}
</script>

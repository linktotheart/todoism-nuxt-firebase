<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
      <AppBar />
      <h1>
        Hellow world 
      </h1>
          <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p>



       <v-btn @click="$router.push('/auth/logout')">
         Logout 
       </v-btn>
      </div>
      
    </v-col>
  </v-row>
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
  }
}
</script>

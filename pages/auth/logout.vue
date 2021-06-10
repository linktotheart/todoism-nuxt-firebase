<template>
  

</template>

<script>
export default {
	asyncData() {
		$nuxt.$fire.auth.signOut()

		console.log("LOgged out")
		$nuxt.$router.push('/')
	}
}
</script>

<style>

</style>
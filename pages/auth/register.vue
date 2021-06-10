<template>
  <v-container style="height: 90vh" fluid class="d-flex p-0 align-center ">
	  <v-row>
		  <v-col class="mx-auto" xl="4" lg="5">
			  <v-card elevation="4" class="px-12 py-10">
				  <h1 class="text-center mb-8">Sign Up </h1>
				    <v-text-field
						v-model="auth.name"
						label="Name"
						:rules="[rules.required]"
						outlined
					></v-text-field>
				    <v-text-field
						v-model="auth.email"
						label="Email"
						:rules="[rules.required]"
						outlined
					></v-text-field>
				    <v-text-field
						v-model="auth.password"
						label="Password"
						outlined
						:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[rules.required, rules.min]"
						hint="At least 8 characters"
			            @click:append="show1 = !show1"
						:type="show1 ? 'text' : 'password'"
					></v-text-field>
			  <v-card-actions class="mx-n2 d-flex ">
					<v-btn
						color="primary"
						large
						raised
						class="px-5 "
						@click="login"
					>
						Register 
					</v-btn>
					
				</v-card-actions>
			  </v-card>
			  <v-snackbar
			  :timeout="3000"
			  v-model="snackbar"
			  absolute
			  bottom
			  color="red darken-3"
			  >
				  {{snacktext}}
			  </v-snackbar>
		  </v-col>
	  </v-row>
  </v-container>
</template>

<script>
export default {
	data() {
		return{
			snackbar: false,
			snacktext: 'No Error Message', 
			show1: false,
			auth: {
				password: '',
				email: '',
			},
			 rules: {
				required: value => !!value || 'Required.',
				min: v => v.length >= 8 || 'Min 8 characters',
				emailMatch: () => (`The email and password you entered don't match`),
			},
		}
	},
	methods: {
		login() {
			this.$fire.auth.signInWithEmailAndPassword( this.auth.email, this.auth.password)
			.catch(
				(e) => {
					this.snacktext = e.message;
					this.snackbar = true;
				}
			)
			.then((user) => {
				this.$router.push('/')
			})
		}
	}
}
</script>

<style>

</style>
<template>
	<div>
		<v-app-bar
			color="deep-purple"
			dark
			app
		>
			<v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>

			<v-toolbar-title>Todoism</v-toolbar-title>

			<v-spacer></v-spacer>

			<!-- <v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn> -->

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-menu
				offset-y
				min-width="120"
				transition="scroll-y-transition"
				left
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						icon
						v-bind="attrs"
						v-on="on"
					>
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item
						v-for="(item, i) in menus"
						:key="i"
						:to="item.link"
					>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			:mini-variant.sync="mini"
			class="deep-purple  "
			dark

			app
			expand-on-hover

		>
			<v-list>
				<v-list-item class="px-2">
					<v-list-item-avatar>
						<v-img :src="$nuxt.$fire.auth.currentUser.photoURL" />
					</v-list-item-avatar>
				</v-list-item>

				<v-list-item link>
					<v-list-item-content>
						<v-list-item-title class="text-h6">
							{{$nuxt.$fire.auth.currentUser.displayName}}
						</v-list-item-title>
						<v-list-item-subtitle>{{$nuxt.$fire.auth.currentUser.email}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list
				nav
				dense
				class="mt-8 0"
			>
				<!-- <v-subheader>MENU </v-subheader> -->
				<v-list-item-group
					v-model="group"
					class=""
				>

					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item>

					<v-list-item to="/project/jh">
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Projects</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data: () => ({
		drawer: true,
		group: null,
		mini: true,
		menus: [
			{
				title: 'Profile',
				link: 'auth/profile',
			},
			{
				title: 'Logout',
				link: 'auth/logout',
			},
		],
	}),
}
</script>

<style>
</style>
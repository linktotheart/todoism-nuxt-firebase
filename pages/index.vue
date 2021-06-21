<template>
	<v-container>
		<v-row>
			<v-col xl="12 w-100 mt-4  d-flex justify-between">
				<h1 class="h">
					Projects
				</h1>
				<v-spacer></v-spacer>
				<v-btn
					large
					rounded
					color="primary"
					@click="dialog = true"
				>
					<v-icon
						dark
						left
					>
						mdi-plus
					</v-icon>
					Add New Project
				</v-btn>
			</v-col>
		</v-row>

		<v-dialog
			v-model="dialog"
			persistent
			max-width="600px"
		>

			<v-card>
				<v-card-title class="color-accent">
					<span class="text-h5">Add a New Project</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12">
								<v-text-field
									label="Project Name*"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-textarea
									label="Project Description*"
									type="text"
									required
									row-height="1"
									rows="2"
								></v-textarea>
							</v-col>
							<v-col
								cols="8"
							>
							<span class="subheading">Priority</span>
								<v-chip-group
									mandatory
									active-class="primary--text"
								>

									<v-chip
										v-for="tag in priority"
										:key="tag"
									>
										{{ tag }}
									</v-chip>
								</v-chip-group>
							</v-col>
							
						</v-row>
					</v-container>
					<small>*indicates required field</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="darken-1 px-6"
						rounded
						
						@click="dialog = false"
					>
						Close
					</v-btn>
					<v-btn
						color="primary px-6"
						rounded
						@click="dialog = false"
					>
						Add New
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<v-row>
			<v-col
				xl="3"
				lg="3"
				md="4"
				sm="6"
			>
				<ProjectCard />
			</v-col>
		</v-row>
	</v-container>

</template>

<script>
import AppBar from '~/components/AppBar.vue'
import ProjectCard from '~/components/ProjectCard.vue'

export default {
	data() {
		return {
			dialog: false,
			priority: ['LOW', 'MEDIUM', 'HIGH', 'URGENT',]
		}
	},
	components: {
		AppBar,
	},
	methods: {
		logout() {},
	},
	layout: 'App',
}
</script>

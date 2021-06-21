<template>

	<v-container class="mt-6">
		<v-row>
			<v-col md="3	">
				<v-sheet
					dark
					rounded="lg"
					class="rounded-lg pb-0"
				>
					<v-list class="rounded-lg">
						<v-subheader class="subheader">
							Project Name
						</v-subheader>
						<v-list-item
							v-for="folder in folders"
							:key="folder.title"
							draggable=""
						>
							<v-list-item-avatar>
								<v-icon
									class="teal darken-1"
									dark
								>
									mdi-folder
								</v-icon>
							</v-list-item-avatar>

							<v-list-item-content>
								<v-list-item-title v-text="folder.title"></v-list-item-title>

								<v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-action>
								<v-progress-circular
									:value="progress"
									class="mr-2"
								></v-progress-circular>
							</v-list-item-action>
						</v-list-item>

						<v-divider />

						<v-list-item
							rounded
							color="primary m-3 rounded lighten-4"
						>
							<v-list-item-content class="pb-0">
								<v-btn
									block
									x-large
									rounded
									color="pink lighten-2"
								>
									Add New
								</v-btn>
							</v-list-item-content>
						</v-list-item>

					</v-list>
				</v-sheet>
			</v-col>

			<v-col>

			</v-col>
		</v-row>
	</v-container>

</template>

<script>
export default {
	layout: 'App',
	data() {
		return {
			folders: [
				{
					subtitle: 'Jan 9, 2014',
					title: 'Photos',
				},
				{
					subtitle: 'Jan 17, 2014',
					title: 'Recipes',
				},
				{
					subtitle: 'Jan 28, 2014',
					title: 'Work',
				},
			],
		}
	},
}
</script>

<style>
</style>
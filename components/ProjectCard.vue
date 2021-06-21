<template>
	<v-card raised="16" rounded="" class="project ">
		 <v-progress-linear
			color="success"
			
			value="90"
		></v-progress-linear>
		<v-card-title>Project Name Here </v-card-title>
		<v-card-text>
			<div class="text-subtitle-1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam mollitia officia porro commodi earum sequi provident unde quidem aliquam ad. Id, laborum amet.
			</div>
		</v-card-text>
		
	</v-card>
</template>

<script>
export default {

}
</script>

<style>
.text-subtitle-1{
	display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
.project{

}
</style>
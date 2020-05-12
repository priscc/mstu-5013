<template>
	<v-card class="mx-auto" outlined>
		<v-list-item-title class="headline pa-2 grey lighten-3 text-wrap">{{ header }}</v-list-item-title>
		<v-container class="py-0">
			<v-row>
				<v-col cols="4" class="pa-0" v-for="(subtopic, index) in subtopics" :key="index">
					<v-card v-if="subtopic.subtopicContent_published" class="mx-auto box" outlined :to="`/Topic/${subtopic.subtopic_url}`">
						<div class="done pa-2">
							<v-responsive>
								<v-img :src="require(`@/assets/${subtopic.img}`)" aspect-ratio="1"></v-img>
							</v-responsive>
							<v-card-subtitle class="text-center">{{ subtopic.subtopicTitle }}</v-card-subtitle>
						</div>
					</v-card>
					<v-card v-else id="watermark" class="mx-auto box" outlined>
						<div class="pa-2">
							<v-responsive>
								<v-img :src="require(`@/assets/${subtopic.img}`)" aspect-ratio="1"></v-img>
							</v-responsive>
							<v-card-subtitle class="text-center">{{ subtopic.subtopicTitle }}</v-card-subtitle>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-card> <!-- end of #timePeriods -->
</template>

<script>
export default {
	name: 'timePeriods',
	props: {
		header: String,
		subtopics: Array
	},
	data (){
		return{
			logo: "logo.png"
		}
	}
}
</script>

<style>
	.done:hover {
		border: 2px solid grey;
		font-weight: normal;
		/*text-decoration: underline;*/
	}
	.box{
		min-height: 100%;
		border: .5px solid lightgrey;
		text-align: center;
		min-height: 100%
	}
	#watermark:after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		background-image: url("https://i7.pngguru.com/preview/653/502/366/postage-stamps-clip-art-draft.jpg");
		background-size: 100% 100%;
		/*background-position: 30px 30px;*/
		background-repeat: no-repeat;
		opacity: 0.7;
	}
</style>

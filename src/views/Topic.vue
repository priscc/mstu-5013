<template>
<v-container class="topicsContainer">
	<!-- BREADCRUMB -->
	<v-row class="py-4">
		<v-col>
			<h3>American Revolution</h3>
		</v-col>
	</v-row>

	<v-row>
		<!-- Left sidebar -->
		<v-col class="topicsSideBar">
			<v-card tile >
				<v-list>
					<v-list-item-group v-model="item" color="primary">
						<v-list-item class="py-1 mb-4" v-for="(item, i) in items" :key="i">
							<v-list-item-icon class="mr-2 SideBar_icon">
								<v-icon v-text="item.icon"></v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title class="SideBar_text" v-text="item.title"></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-card>
		</v-col>
		<!-- Right content -->
		
		<events-page :causes="causes"/>
	</v-row>

</v-container>
</template>


<script>
// @ is an alias to /src
import eventsPage from '@/components/EventsPage.vue'
import  { db } from '@/main'

export default {
	name:'Topics',
	components: { 
		eventsPage
	},
	data() { 
		return {
			id: this.$route.params.id,
			item: 0,
			items: [
			  { title: 'Events', icon: "mdi-clock-start"},
			  { title: 'Terminology', icon: "mdi-view-dashboard"},
			  { title: 'Historical People', icon: "mdi-account"}
			],
			events: [],
			causes: []
		}
	},
	methods: {
		async readSubtopic() {
			// *** this are just for Causes Events ***
			let todosRef = await db.collection(this.id).doc("Events").get();

			console.log("in here", this.events);
			// todosRef.then(snapshot => {
			// 	var appData = [];
			// 	snapshot.forEach(doc => {
			// 		console.log("in here", this.events);
			// 		this.events = doc.data().ArrayOfevents;
			// 	});
			// });
			// this.orgEvents();
		}, 
		orgEvents(){
			var v = this.events;
			// console.log("in here", v);
			var appData = [];
			for (var i = 0; i < v.length; i++) {
				if( v[i].eventType == "Cause"){
					this.causes.push(v[i]);
				}
				
			}
			// console.log("causes", this.causes);
		}
	},
	mounted() {
		this.readSubtopic(); 
	}
}
</script>


<style type="text/css">
	html {
	scroll-behavior: smooth;
	}
	hr.vertical {
		width: 1px;
		background-color: silver;
		height: 400px;
		border: 2px solid silver;
		border-radius: 2px;
		margin-left: 25%;
		margin-right: 25%;
	}
	.topicsContainer{
		min-width: 90% !important;
	}
	.topicsSideBar{
		max-width: 20% !important;
	}
	@media screen and (max-width: 780px) {
		.SideBar_icon{
			max-width: 10%;
		}
		.SideBar_text {
			font-size: 12px;
		}
	}
	@media screen and (max-width: 425px) {
		.topicsSideBar{
			min-width: 100%;
		}
		/*.SideBar_text {
			font-size: 12px;
		}*/
	}

	/* In part - inspired by: https://vuejsexamples.com/horizontal-timeline-with-vue-and-swiperjs/ */
</style>

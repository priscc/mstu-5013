<template>

	<v-col>
		<v-row class="text-center">
			<v-col class="pa-0">
				<historical-narrative :header="`Cause`"  :events="causes"/>
			</v-col>
			<v-col cols="1" class="pa-0" style="max-width: 10px;"><hr class="vertical"/></v-col>
			<v-col class="pa-0">
				<historical-narrative :header="`TurningPoints`"  :events="TurningPoints"/>
			</v-col>
			<v-col cols="1" class="pa-0" style="max-width: 10px;"><hr class="vertical"/></v-col>
			<v-col class="pa-0">
				<historical-narrative :header="`Effects`"  :events="Effects"/>
			</v-col>
		</v-row>
	</v-col>
</template>

<script>
// @ is an alias to /src
import historicalNarrative from '@/components/HistoricalNarrative.vue'

export default {
	name:'Topics',
	props: {
		causes: Array
	},
	components: { 
		historicalNarrative
	},
	data() { 
		return {
			
			TurningPoints: [
				{ eventTitle: "Event 4", num: 1},
				{ eventTitle: "Event 5", num: 2},
				{ eventTitle: "Event 6", num: 3}
			],
			Effects: [
				{ eventTitle: "Event 7", num: 1},
				{ eventTitle: "Event 8", num: 2},
				{ eventTitle: "Event 9", num: 3}
			]
		}
	},
	methods:{
		orgEvents(){
			var v = this.events;
			// console.log("in here", v);
			// var appData = [];
			// v.forEach(doc => {
			// 	console.log("in here2", doc);
			// 	if( doc.selectedEventType == "Cause"){
			// 		this.causes.push(v);
			// 		console.log("causes", this.causes);
			// 	}
			// });
		}
	},
	mounted(){
		this.orgEvents();
	}
}
</script>

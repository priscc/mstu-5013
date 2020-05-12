<template>
<v-container>
	<v-row>
		<v-col cols="12" md="6" wrap color="purple" v-for="(period, index) in time_periods" :key="index">
			<time-periods  :header="period.header" :subtopics="period.subtopics" />
		</v-col>
	</v-row>
</v-container>
</template>



<script>
// @ is an alias to /src
import timePeriods from '@/components/TimePeriods.vue'
import  { db } from '@/main'

export default {
	name:'Home',
	components: { 
		timePeriods //translated to time-periods tage
	},
	data() { 
		return {
			time_periods: []
		}
	},
	methods: {
		async getEvents(){
			var timeperiods = [];
			var timeperiod = {};
			let periodRef = db.collection('time_periods');
			periodRef.get().then(snapshot => {
				let appDate = [];
				snapshot.forEach(doc => {
					appDate.push(doc.data());
				});
				this.time_periods = appDate;
			});
		}
	},
	mounted() {
		this.getEvents();
	}
};
</script>

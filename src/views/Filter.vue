<template>
<v-container>
	<blog-show></blog-show>

	<v-row class="pt-5">
		<v-col>
			<v-text-field label="Main input" autocomplete="off" v-model="state" @input="filterStates"></v-text-field>
		</v-col>
	</v-row>
	<v-row v-if="filteredStates && modal">
		<v-col>
			<v-list-item>
		      <v-list-item-content>
		        <v-list-item-title v-for="filteredState in filteredStates" :key="filteredState" @click="setState(filteredState)"> {{ filteredState }}</v-list-item-title>
		      </v-list-item-content>
		    </v-list-item>
			
		</v-col>
	</v-row>

	<!-- 
	<v-row class="pt-5">
		<v-col>
			<v-text-field :rules="rules" label="Main input" autocomplete="off" v-model="state" @input="filterStates"></v-text-field>
		</v-col>
	</v-row>
	<v-row v-if="filteredStates && modal">
		<v-col>
			<v-list-item>
		      <v-list-item-content>
		        <v-list-item-title v-for="filteredState in filteredStates" :key="filteredState" @click="setState(filteredState)"> {{ filteredState }}</v-list-item-title>
		      </v-list-item-content>
		    </v-list-item>
			
		</v-col>
	</v-row> -->


</v-container>
</template>

<script>
import blogShow from '@/components/blogShow.vue'

export default {
	data: function(){
		return{
			state: '',
			modal: true,
			states: [
				'Alaska', 'Alabama', 'California', 'Colorado', 'Connecticut', 'Missouri', 'Florida'
			],
			filteredStates: [],
			filteredPeriods: []
		}
	},

	components: {
		blogShow, 
		// blogPost
	},
	methods: {
		filterStates() {
			this.filteredStates = this.states.filter(state => {
				return state.toLowerCase().startsWith(this.state.toLowerCase());
			})
		},
		setState(state){
			this.state = state
		},
		periodAutofill(){
			this.filteredPeriods = this.state.filter(state => {
				var x = state.toLowerCase();
				console.log(x);
				return x;
			})

			// let snapshot = db.collection('TimePeriods').where('header', '==', 'special').get();
			// snapshot.forEach (doc => {
			// 	let appDate = doc.data();
			// 	console.log(appDate);
			// });	
		}
	}
}

</script>

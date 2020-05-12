<template>
	<div id="app">
	<v-container>
		<h1 class="pt-5">Add a Subtopic</h1>
		<blockquote class="blockquote mb-3 pb-5">Fill the following form to add topics and subtopics to the home web page</blockquote>
		<hr>
		<!-- CHOOSING topic -->	
		<div style="height: 50px;"></div>	
		<h2>Time Period</h2>
		<v-row>
			<v-spacer></v-spacer>
			<v-col cols="8">
				<v-select v-model="selectedTimePeriod" :items="timePeriods" label="Choose:" outlined >{{ timePeriods }}</v-select>
			</v-col>
			<v-spacer></v-spacer>
			<v-spacer></v-spacer>
		</v-row>
		<!-- ADDING subtopic  -->
		<h2>Subtopic Information</h2>
		<v-row>
			<v-spacer></v-spacer>
			<v-col cols="8">
				<v-text-field label="Enter subtopic title:" autocomplete="off" v-model="createdSubtopic.subtopicTitle"></v-text-field>
				<v-file-input accept="image/*" label="File input: subtopic icon image"></v-file-input>
			</v-col>
			<v-spacer></v-spacer>
			<v-spacer></v-spacer>
		</v-row>
		<!-- ADDING event name -->
			<!-- <v-row class="mt-3">
				<v-col class="pr-0">
					<h3>Add Subtopic Content:</h2>
				</v-col>
				<v-col class="pl-0">
					<v-switch class="mt-2 pa-0" v-model="createdSubtopic.subtopic_published" :label="`${createdSubtopic.subtopic_published.toString()}`"></v-switch>
				</v-col>
				<v-spacer></v-spacer>
			</v-row>	 -->
			
		<!-- Submit Button -->
		<v-row class="pt-5">
			<v-col class="d-flex align-end flex-column">
				<v-btn large outlined color="success" v-on:click.prevent="submitData">SUBMIT</v-btn>
			</v-col>
		</v-row>
		
	</v-container>
	</div>
</template>




<script>
import  { db } from '@/main'

export default {
	data: function(){
		return{
			selectedTimePeriod: "",
			createdSubtopic: {
				subtopicTitle: "",
				img: "logo.png",
				subtopicContent_published: false,
				subtopic_url: ""
			},
			timePeriods: ['Regional Interactions c.1200 - c.1450',
						'First Global Age c.1450 - c.1750',
						'Revolutions & Industrialization c.1750-c.1900',
						'Modern Times c.1900 - Present'],
			menu: false
		}
	},
	watch: {
	  menu (val) {
		val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
	  }
	},
	methods: {
		save (date) {
			this.$refs.menu.save(date)
		},
		async submitData() {
			let timeperiod =  this.timePeriods.indexOf(this.selectedTimePeriod) + 1;
			let todosRef = await db.collection('time_periods');
			let id = todosRef.doc("time_period_" + timeperiod);
			
			var subtopicsAdded = await id.get().then(function(doc){
				return doc.data().subtopics;
			});
			//creating URL & special collection name for this subtopic
			var url = this.createdSubtopic.subtopicTitle.replace(/\s+/g, '').toLowerCase();
			this.createdSubtopic.subtopic_url = url;
			//adding subtopic info to the time period
			subtopicsAdded.push(this.createdSubtopic);
			//UPDATING time period DOCUMENT
			id.update({
				subtopics: subtopicsAdded
			});
		}
	}
}
</script>

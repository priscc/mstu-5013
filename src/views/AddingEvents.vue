<template>
	<div id="app">
	<v-container>
		<h1 class="pt-5">Add an Event</h1>
		<blockquote class="blockquote mb-5 pb-5">Fill the following form to add topics and subtopics to the home web page</blockquote>
		<hr>

<!-- HIDDEN event form -->
		<div style="height: 50px;"></div>
		<h2 class="pb-5">Add event to subtopic:</h2>
		<v-row>
			<v-col cols="12">
				
				 <v-text-field disabled v-model="subtopic" label="Selected subtopic: American Revolution" outlined shaped ><v-icon slot="append" >fas fa-search</v-icon></v-text-field>
        	</v-col>
		</v-row>
		<v-row>
			<v-col>
				<!-- Type of Event -->
				Select event type:<v-select disabled v-model="createdEvent.selectedEventType" :items="typeOfEvent"label="Event" outlined >Cause</v-select>
				<!-- Event Title -->
				<v-text-field label="Enter event title:" autocomplete="off" v-model="createdEvent.eventTitle"></v-text-field>
					<v-menu  ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
						
						<template v-slot:activator="{ on }" >
							<v-text-field v-model="createdEvent.date" label="Date" readonly v-on="on" ></v-text-field>
						</template>
						<v-date-picker ref="picker" v-model="createdEvent.date" type="month" :max="new Date().toISOString().substr(0, 10)" min="1-01-01" @change="save" ></v-date-picker>
					</v-menu>
			</v-col>
			<!-- <v-spacer></v-spacer> -->
			<v-col cols="7" class="ml-5 pl-5" >
				Content: <v-textarea  height="200px" outlined v-model="createdEvent.content"  name="inputTextarea" label="Description" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></v-textarea> 
			</v-col>
		</v-row>	
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
			subtopic: "americanrevolution",
			createdEvent: {
				contentType: "Events",
				eventType: "Cause",
				eventTitle: "",
				date: null,
				content: ""
			},
			typeOfInformation: [ 'Event', 'Terminology', 'Historical People'],
			typeOfEvent: ['Cause', 'Turning Point', 'Effect'],
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
		retrieveCollection(){
			return this.subtopic
		},
		async submitData() {
			var x = this.retrieveCollection()
			let id = await db.collection(x).doc(this.createdEvent.contentType);

			var eventAdded = await id.get().then(function(doc){
				return doc.data().events;
			});

			eventAdded.push(this.createdEvent);
			
			//UPDATING time period DOCUMENT
			id.update({
				events: eventAdded
			});
		}
	}
}
</script>



		
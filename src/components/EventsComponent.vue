<template>

<v-list class="pa-0" two-line subheader rounded>
	<v-list-item  v-for="event in events" :key="event.eventTitle" @click="" >
		 <v-badge class="mt-2" color="red accent-4" :content="event.num"></v-badge>
          <v-list-item-content>
            <v-list-item-title v-text="event.eventTitle"></v-list-item-title>
          </v-list-item-content>
	</v-list-item>
</v-list>
</template>



<script>
export default {
	name: 'events',
	props: {
		events: Array
	},
	data(){
		return{}
	}
}
</script>

<template>

<v-list  rounded>
	<v-list-item v-for="event in events" :key="event.eventTitle" @click="" >
		<v-row>
			<v-col class="d-flex align-center">
				<v-badge class=" mt-2" color="red accent-4" :content="event.num"></v-badge>
			</v-col>
			<v-col cols="10">
				<v-list-item-content>
            <v-list-item-title class="text-wrap" v-text="event.eventTitle"></v-list-item-title>
          </v-list-item-content>
			</v-col>
		</v-row>
	</v-list-item>
</v-list>
</template>



<script>
export default {
	name: 'events',
	props: {
		events: Array
	}
}
</script>

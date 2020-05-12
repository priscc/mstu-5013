<template>
<v-container class="py-0">
	<v-row>
		<v-col class="pt-0">
			<h4>{{header}}</h4>
		</v-col>
	</v-row>
		<events :events="events"  />
</v-list>


</v-container>
</template>


<script>
// @ is an alias to /src
import events from '@/components/EventsComponent.vue'

export default {
	name:'Topics',
	components: { 
		events
	},
	props: {
		events: Array,
		header: String
	}
}
</script>


<style type="text/css">
	h4{
		border: 1px solid grey;
	}

</style>
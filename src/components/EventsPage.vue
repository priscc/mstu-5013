<template>

	<v-col>
		<v-row class="text-center">
			<v-col class="pa-0">
				<historical-narrative :header="`Cause`"  :events="causes"/>
			</v-col>
			<v-col cols="1" class="pa-0" style="max-width: 10px;"><hr class="vertical"/></v-col>
			<v-col class="pa-0">
				<historical-narrative :header="`TurningPoints`"  :events="turningP"/>
			</v-col>
			<v-col cols="1" class="pa-0" style="max-width: 10px;"><hr class="vertical"/></v-col>
			<v-col class="pa-0">
				<historical-narrative :header="`Effects`" :events="effects"/>
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
		causes: Array,
		turningP: Array,
		effects: Array
	},
	components: { 
		historicalNarrative
	}
}
</script>

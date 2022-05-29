<template>
<v-container fluid>
  <v-container>
      <Intro />
  </v-container>
    <v-row class="tabs">
      <v-tabs
			:vertical="vertical"
			class="mt-10 ml-3"
		>
			<v-tab 
            v-for="section in sections"
            :key="section.label"
            class="justify-start">
				<v-icon left>{{ section.icon }} </v-icon>
				{{ section.label }}
			</v-tab>
	
			<v-tab-item 
            class="ma-5 mt-5 mt-md-0" 
            :transition="false">
				<v-card elevation="0" class="main-card">
                        <Trends class="card-content" />
				</v-card>
			</v-tab-item>
		</v-tabs>
    </v-row>
</v-container>
</template>

<style scoped>


.card-content{
    padding-top: 1em;
}
</style>
<script>
export default {
    data: () => ({
     sections: [
       {'label':'Trends', 'path':'/', 'icon': 'mdi-chart-line', 'hover':'Trends'},
       {'label':'FAIRness', 'path':'Fairness', 'icon': 'mdi-bullseye', 'hover':'FAIR'},
       {'label':'Data', 'path':'OurData', 'icon': 'mdi-database', 'hover':'Data'},
       {'label':'About', 'path':'About', 'icon': 'mdi-lightbulb-outline', 'hover':'About'}
     ]
    }),
  computed: {
      vertical() {
			return this.$vuetify.breakpoint.mdAndUp;
		}
  }
}
</script>
<template>
  <v-app>
    <v-container fluid>
    <v-row 
      justify="center"
      >
      <v-col 
      class="ml-6 mb-8"
      sm="12"
      md="9" 
      lg="8"
      xl="5">
          <Intro />

      </v-col>
    </v-row>
  <v-container class="main-container" fluid>
    <v-row justify=center>
     
      <div>
      <v-tabs
        :vertical="vertical"
        class="mt-6 ml-0"
        color="#0b579f" 
        >
          <v-tab 
                v-for="section in sections"
                :key="section.label"
                :to="section.path"
                class="justify-start"
                >
            <v-icon left>{{ section.icon }} </v-icon>
            {{ section.label }}
          </v-tab>
          </v-tabs>
          </div>
            <v-col
            sm="12"
            md="10" 
            lg="10"
            xl="7"
            >
              <Nuxt />
            </v-col>

    </v-row>
    </v-container>
  </v-container>
  </v-app>
</template>
<style>
#app{
    background-color: white;
    width: 100%;
}

html, body, .container {
  margin: auto;

}

h1 {
    font-family: Roboto, sans-serif;
    font-size: 2.2rem !important;
    line-height: 4.5rem;
    font-weight: 400;
    color:#0b579f;
}

h2 {
    font-family: Roboto, sans-serif;
    font-size: 1.7rem !important;
    line-height: 4.5rem;
    font-weight: 500;
    color:#000000de;
}

p{
    font-family: Roboto, sans-serif;
    font-size: .8em !important;
    font-weight: 400;
}

.card-content{
    padding-top: 1em;
}

</style>

<script>

export default {
    data(){
        return {
            sections: [
            {'label':'Trends', 'path':'/', 'icon': 'mdi-chart-line', 'hover':'Trends'},
            {'label':'FAIRness', 'path':'/FAIRness', 'icon': 'mdi-bullseye', 'hover':'FAIRness'},
            {'label':'Data', 'path':'/Data', 'icon': 'mdi-database', 'hover':'Data'},
            {'label':'About', 'path':'/About', 'icon': 'mdi-lightbulb-outline', 'hover':'About'}
            ],
        bigDis:true
        }
    },
    computed: {
        vertical() {
			return this.$vuetify.breakpoint.mdAndUp;
		},
        tab() {
            return this.$store.getters['getActiveTab']
        },
        columnNeeded(){
            console.log(!this.$vuetify.breakpoint.lgAndUp)
            return this.$vuetify.breakpoint.lgAndUp;
        }
    }
} 

</script>

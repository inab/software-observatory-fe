<template>
  <v-app>
    <v-container fluid>
    <v-row 
      justify="space-around"
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
    <v-row 
    justify="center">
      <div>
      <v-tabs
        :vertical="vertical"
        :centered="!vertical"
        v-bind:style="tabsStyle"
        class="mt-4 ml-0 mb-6 tabs"
        color="#0b579f" 
        show-arrows
        >
        <v-tabs-slider></v-tabs-slider>

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
          xs="12"
          sm="12"
          md="12" 
          lg="10"
          xl="10"
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
import { mapGetters } from 'vuex';

export default {
    data(){
        return {
            sections: [
            {'label':'Trends', 'path':'/', 'icon': 'mdi-chart-line', 'hover':'Trends'},
            {'label':'FAIRness', 'path':'/FAIRness', 'icon': 'mdi-bullseye', 'hover':'FAIRness'},
            {'label':'Data', 'path':'/Data', 'icon': 'mdi-database', 'hover':'Data'},
            {'label':'About', 'path':'/About', 'icon': 'mdi-lightbulb-outline', 'hover':'About'}
            ],
            bigDis:true,
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    computed: {
        ...mapGetters( {
          'window': 'getWindow'
        }),
        vertical() {
			    return this.$vuetify.breakpoint.lgAndUp;
		    },
        tab() {
            return this.$store.getters['getActiveTab']
        },
        columnNeeded(){
            console.log(!this.$vuetify.breakpoint.lgAndUp)
            return this.$vuetify.breakpoint.lgAndUp;
        },
        tabsStyle(){
          var style = {
            'max-width' : this.window.width*0.9 + 'px'
          }
          return style
        }
    },
    methods: {
        handleResize() {
            this.$store.dispatch('changeWindowWidth', window.innerWidth)
        },
        
    }
} 

</script>

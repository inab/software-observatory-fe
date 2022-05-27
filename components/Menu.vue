<template>
      <v-navigation-drawer
        permanent
        clipped
        :mini-variant="mini"
      >
        <v-list
          nav
          dense
        >
        <v-list-item-group
        active-class=""
        >
            <v-list-item
              :to="section.path"
              v-for="section in sections"
              :key="section.label"
              link 
              >
              <MenuIcon :icon="section.icon" :text="section.hover" />
                
                <v-list-item-title class="hidden-sm-and-down">{{ section.label }}</v-list-item-title>
              </v-list-item>
                </v-list-item-group>

        </v-list>
      </v-navigation-drawer>

</template>

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
      mini() {
         switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
  }
      }
    }
  }
</script>


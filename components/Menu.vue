<template>
      <v-navigation-drawer
        permanent
        clipped
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
              link>
                <v-list-item-icon>
                  <v-icon>{{ section.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ section.label }}</v-list-item-title>
              </v-list-item>
                </v-list-item-group>

        </v-list>
      </v-navigation-drawer>

</template>

<script>
  export default {
    data: () => ({
     sections: [
       {'label':'Trends', 'path':'/', 'icon': 'mdi-chart-line'},
       {'label':'FAIRness', 'path':'Fairness', 'icon': 'mdi-bullseye'},
       {'label':'Our Data', 'path':'OurData', 'icon': 'mdi-database'},
       {'label':'About', 'path':'About', 'icon': 'mdi-lightbulb-outline'}
     ]
    }),
  }
</script>


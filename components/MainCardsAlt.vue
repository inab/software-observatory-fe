<template>
    <v-container fluid class="main-counts">
      <v-row 
        class="d-flex justify-around mb-6"
        >
          <v-col
          v-for="card in cards"
          :key="card.title"
        >
          <v-card 
          light
          tile
          rounded
          class="pa-2 d-flex justify-space-around"
          elevation="4">
          <v-row dense>
                 <v-col cols="1">
                    <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                </v-col>
                <v-col 
                    id="counts-text">
                    <span><h3>{{card.title}}</h3></span>
                    <span><h2>{{ card.count }}</h2></span>
                </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<style scoped>
.main-counts{
    background-color: #114778;
}

#counts-text{
    text-align: right !important;
}

.main-counts .v-card{
    height: 6rem;
    min-height: 6rem;
    width: 15em;
    min-width:15em;
    padding: .5rem;
    display: inline-block;
    position: relative;
}

.main-counts  .v-card h3{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: normal;
    margin: 0.3rem;
}

.main-counts  .v-card h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: normal;
    margin: 0.3rem;
}




</style>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Bio.tools', flex:3, count:2039 },
        { title: 'Bioconda', flex: 3, count:786},
        { title: 'GalaxyUE', flex: 3, count:6676},
        { title: 'Galaxy Toolshed', flex: 3, count:3676},
        { title: 'Bioconductor', flex:3, count:12676},
        { title: 'SourceForge', flex: 3, count:6676},
        { title: 'GitHub', flex: 3, count:1676},
        { title: 'BitBucket', flex: 3, count:1676},
        { title: 'OpenEBench', flex: 3, count:1676}
      ],
    }),
  }
</script>
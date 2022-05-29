<template>
    <v-container>
      <v-row
      justify="space-around"
      align="center">
        <v-col
          v-for="card in cards"
          :key="card.title"
        >
        <div class="source-card"> <!-- Necessary to center cards in columns-->
          <SourceCard 
            :title="card.title" 
            :count="card.count" 
            :label="card.label"/>
        </div>
        </v-col>
      </v-row>
      <div class="source-card">
        <TotalCard :count="total" />
      </div>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Bio.tools', flex:3, count:2039,label:'elixir'  },
        { title: 'Bioconda', flex: 3, count:786, label: 'bioconda'},
        { title: 'GalaxyUE', flex: 3, count:6676, label:'galaxy'},
        { title: 'Bioconductor', flex:3, count:12676, label:'bioconductor'},
        { title: 'SourceForge', flex: 3, count:6676, label:'sourceforge'},
        { title: 'Galaxy Toolshed', flex: 3, count:3676, label: 'galaxy'},
        { title: 'GitHub', flex: 3, count:1676, label:'github'},
        { title: 'BitBucket', flex: 3, count:1676, label:'bitbucket'},
        { title: 'OEB', flex: 3, count:1676, label: 'OEB'}
      ],
      total: '43987'
    }),
  }
</script>

<style scoped>
.source-card{
  margin: auto;
  padding: auto;
  width: 90%;
  width: 13em;
}
</style>
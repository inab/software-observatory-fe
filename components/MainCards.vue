<template>
    <v-container >
            <div v-if="$store.state.data._unLoaded.countsPerSource">
                <v-row
                    justify="space-around"
                    align="center">
                <v-col
                 v-for="card in 8"
                >
                    <div class="source-card">
                        <v-skeleton-loader
                            class="loading-card"
                            type="card-heading"
                            />
                    </div>
                </v-col>
                </v-row>
            </div>
           <div v-else>
            <v-row
                    justify="space-around"
                    align="center">
            <v-col
                v-for="card in cardsC"
                :key="cards_info[card.source].title"
                >
                <div class="source-card"> <!-- Necessary to center cards in columns-->
                <SourceCard 
                    :title="cards_info[card.source].title" 
                    :count="card.count" 
                    :label="cards_info[card.source].label"/>
                </div>
            </v-col>
            </v-row>

           </div>
            
      </v-row>
      <div style="position:relative">
        <div 
        class="card-caption-side"
        v-if="!this.$vuetify.breakpoint.smAndDown"> 
          <p 
          v-html="mainCardCaption" 
          class="mr-4 text--secondary mb-6 card-content caption">
          </p>
      </div>
        <div class="source-card">
          <TotalCard :count="totalC" />
        </div>
      <div 
        class="card-caption-b"
        v-if="this.$vuetify.breakpoint.smAndDown"> 
          <p
          v-html="mainCardCaption" 
          class="mr-2 text--secondary pb-0 mb-0 card-content caption">
          </p>
      </div>
        
      </div>
      
        
    </v-container>
</template>


<script>
import { mapGetters } from 'vuex';


  export default {
    data: () => ({
      cards_info: {
        biotools: {
          title: 'Bio.tools', flex : 3, label : 'elixir' 
          },
        bioconda: {
          title: 'Bioconda', flex : 3, label : 'bioconda' 
        },
        galaxy:{
          title: 'GalaxyEU', flex : 3, label : 'galaxy' 
        },
        bioconductor: {
          title: 'Bioconductor', flex : 3, label : 'bioconductor' 
        },
        toolshed : {
          title: 'Galaxy Toolshed', flex : 3, label : 'galaxy' 
        },
        sourceforge :{
          title: 'SourceForge', flex : 3, label : 'sourceforge' 
        },
        github: {
          title: 'GitHub', flex : 3, label : 'github' 
        },
        bitbucket: {
          title: 'BitBucket', flex : 3, label : 'bitbucket' 
        },
        opeb_metrics:{
          title: 'OpenEBench', flex : 3, label : 'OEB' 
        }
        },
        mainCardCaption : "Number of instances on which metadata is being gathered across sources.'Total' is the total number of sources in the Software Observatory's integrated collection."
    }),
    computed: {
      ...mapGetters('data',{
        cardsC: 'CountsPerSource',
        totalC: 'TotalCount'
      })
      }
  }
</script>

<style scoped>

.card-caption-side{
  float:right; 
  width:25%; 
  text-align: justify;
  margin-top: -1em;
}

.card-caption-b{
  width:80%;
  text-align: center;
  margin: auto;
}

.source-card{
  margin: auto;
  padding: auto;
  width: 90%;
  width: 13em;
}

.loading-card{
    min-height: 4.5rem;
    width: 100%;
    min-width:8em;
    display: inline-block;
}
</style>
<template>
    <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="800"
    >
    <v-divider></v-divider>
    <h6 class="overline text-center collections-header">collections</h6>
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
        center-active
      >
        <v-slide-item
          v-for="(n,idx) in collections"
          :key="idx"
          v-slot="{ active, toggle }"
        >
        <v-btn
            class="mx-2"
            :input-value="active"
            active-class="primary white--text"
            depressed
            rounded
            @click="setCollection(idx)"
            >
            {{n.title}}
            </v-btn>
        </v-slide-item>
      </v-slide-group>
  
      <v-expand-transition>
        <v-sheet
          v-if="model != null"
          class="mb-2"
        >
          <v-row
            class="fill-height mr-4 ml-4"
            align-content="center"
            justify="center"
            align="center"
          >
            <v-col
                cols="10"
                >
                <h6 class="text-subtitle mb-0 pb-0 text-left collection-title">{{collections[model].title}}</h6>
                <p class="text-subtitle-2 mt-0 pt-0 mb-2 text-left">{{collections[model].subtitle}}</p>
                <p class="text--secondary text-left collection-description mb-0 mt-0">
                {{ collections[model].description }}
                </p>
            </v-col>
            <v-col
                cols="2"
                >
                <v-img
                :src="require(`@/static/collections/${collections[model].image}`)"
                ></v-img>

            </v-col>
          </v-row>
        </v-sheet>
      </v-expand-transition>
      <v-divider></v-divider>
    </v-sheet>
  </template>
  <style scoped>
    .collections-header {
      color: #0b579f;
    }

    .collection-title{
        color: #0b579f;
        font-size: 1.8rem;
        font-weight: 500;
    }
    
    .collection-description{
        font-size: .9em !important
    }

  </style>
  <script>
import { mapGetters } from 'vuex';

export default {
    data: () => ({
        model: null,
        collections: [
            {
                id : 'RIS3CAT VEIS',
                title : 'VEIS',
                subtitle : 'Value of the EGA for Industry and Society',
                description : 'The RIS3CAT VEIS project will create an open ecosystem of technologies that covers and adapts to the needs of analysis and interpretation of omic and clinical data in research and application environments in biomedicine, through the database EGA.',
                homepage: 'https://veis.bsc.es/',
                image: 'Logo_VEIS_Corto.png',
            },
            {
                id : 'ELIXIR-ES',
                title : 'ELIXIR-ES',
                subtitle : 'ELIXIR Spain - INB',
                description : 'The Spanish National Bioinformatics Institute (‘Instituto Nacional de Bioinformática’ in Spanish, INB) is composed of 19 computational biology groups that comprise a virtual institute. It started operating in 2003 and its more than 40 employees are funded by the National Health Institute Carlos III (ISCIII).',
                homepage: 'https://elixir-europe.org/about-us/who-we-are/nodes/spain',
                image: 'Logo_ELIXIR_ES.png',
            }
        ]
    }),
    computed: {
        ...mapGetters('trends', {
            currentCollection : 'CurrentCollection',
        }),
    },
    methods:{
        setCollection(idx){
            if(this.collections[idx].id != this.currentCollection){
                this.model=idx
                this.$store.dispatch('trends/getCurrentCollection', this.collections[this.model].id)

            }else{
                this.model=null
                this.$store.dispatch('trends/getCurrentCollection', 'tools')
            };

                this.$store.dispatch("trends/getLicensesSunburst");
                this.$store.dispatch("trends/getLicensesOpenSource");
                this.$store.dispatch("trends/getSemanticVersioning");
                this.$store.dispatch("trends/getVersionControlCount");
                this.$store.dispatch("trends/getVersionControlRepositories");

            
        }
    }
}
</script>
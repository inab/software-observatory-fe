<template>
    <div>
        <v-row>
            <CollectionSelectorFAIR />
        </v-row>
        <v-row 
        justify="center"
        >
            <v-col
            md="11"
            sm="11"
            cols="11"
            lg="11"
            xl="11">
                <v-card
                outlined
                elevation="1"
                class="pt-4 pl-6 pb-4">
                    <card-title text="Findability"></card-title>

                    <v-skeleton-loader
                        v-if="$store.state.fairness._unLoaded.FAIRscores"
                        class="mb-5 ml-10 mr-10"
                        type="card"
                        />

                    <tabs-plot-info 
                        v-else
                        class="pr-3"
                        infoComponent="FTable"
                        plotComponent="BubbleChartFindability"
                        properties=""
                        caption="">
                    </tabs-plot-info>
                
                </v-card>
            </v-col>
    
            <v-col
            md="11"
            sm="11"
            cols="11"
            lg="11"
            xl="11">
                <v-card
                outlined
                elevation="1"
                class="pt-4 pl-6 pb-4">
                    <card-title text="Accessibility"></card-title>
                    
                    <v-skeleton-loader
                        v-if="$store.state.fairness._unLoaded.FAIRscores"
                        class="mb-5 ml-10 mr-10"
                        type="card"
                        />
                    
                        <tabs-plot-info
                            v-else
                            class="pr-3"
                            infoComponent="ATable"
                            plotComponent="BubbleChartAccessibility"
                            properties=""
                            caption="">
                    </tabs-plot-info>

                </v-card>
            </v-col>
    
            <v-col
            md="11"
            sm="11"
            cols="11"
            lg="11"
            xl="11">
                <v-card
                outlined
                elevation="1"
                class="pt-4 pl-6 pb-4">
                    <card-title text="Interoperability"></card-title>
                        
                    <v-skeleton-loader
                        v-if="$store.state.fairness._unLoaded.FAIRscores"
                        class="mb-5 ml-10 mr-10"
                        type="card"
                        />

                    <tabs-plot-info
                        v-else
                        class="pr-3"
                        infoComponent="ITable"
                        plotComponent="BubbleChartInteroperability"
                        properties=""
                        caption="">
                    </tabs-plot-info>

                    </v-card>
            </v-col>
            <v-col
            md="11"
            sm="11"
            cols="11"
            lg="11"
            xl="11">
                <v-card
                outlined
                elevation="1"
                class="pt-4 pl-6 pb-4">
                    <card-title text="(Re)Usability"></card-title>

                    <v-skeleton-loader
                        v-if="$store.state.fairness._unLoaded.FAIRscores"
                        class="mb-5 ml-10 mr-10"
                        type="card"
                        />

                    <tabs-plot-info
                        v-else
                        class="pr-3"
                        infoComponent="RTable"
                        plotComponent="BubbleChartReusability"
                        properties=""
                        caption="">
                        </tabs-plot-info>

                </v-card>
            
            </v-col>
        </v-row>
    </div>
</template>
<script>
import CollectionSelectorFAIR from '~/components/CollectionSelectorFAIR.vue';

  export default{
    name: "FAIRness",
 
    created(){
        this.$store.dispatch("fairness/getFAIRscores");
    },
    components: { CollectionSelectorFAIR }

    }
  
  </script>
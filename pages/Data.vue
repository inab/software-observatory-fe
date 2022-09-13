<template>
    <div>
        <v-row
        class="mb-5"
        justify="center">
        <v-col
        xl="11"
        lg="11"
        md="11"
        sm="11"
        cols="12"
            >
            <v-card
            elevation="0"
            class="pb-5 pt-1 card-main">
                <MainCards />
            </v-card>
        </v-col>
        </v-row>
        <v-row justify="center">
            <v-col 
            xl="11"
            lg="11"
            md="11"
            sm="12"
            cols="12">
            <v-alert
                elevation="0"
                dense
                colored-border
                color="#0b579f"
                border="left"
                class="mt-1 ml-0 mr-0 mb-1"
                >
                <p class="ml-4 mr-4 text--secondary card-content alert-content">
                    Life Sciences Research Software metadata is extracted from different sources 
                    and then harmonized and integrated to generate a comprehensive
                    collection of Research Software metadata. 
                    <!--HoverIconLink
                    path="/about"
                    icon="mdi-information-outline"
                    text="learn more"/-->
 
                </p>
            </v-alert>
              </v-col>
            <v-col 
            xl="11"
            lg="12"
            md="12"
            sm="12"
            cols="12">

                <v-card 
                outlined
                elevation="2"
                class="mt-4"
                :class="{'plot-card': !small , 'plot-card-small': small}" >
                <card-title text="Consolidated Research Software (meta)data"></card-title>
                    <v-row 
                        class="mt-0"
                        justify="center">
                        <v-col
                        xl="9"
                        lg="11"
                        md="12"
                        sm="12"
                        cols="12"
                        >
                            <v-skeleton-loader
                                v-if="$store.state.data._unLoaded.features"
                                class="mb-5 ml-10 mr-10"
                                type="card"
                                />
                            <PlotOverview v-else />    
                        </v-col>
                        <v-col
                            xl="3"
                            lg="10"
                            md="10"
                            sm="10"
                            cols="10"
                            justify-self="left">
                            <p class="text--secondary mb-6 card-content caption">
                                <span class="highlight">Features obtained from the different software metadata sources and total number of 
                                instances for which each feature exists in the dataset.</span>
                                <br>
                                Dots (green: primary sources, red: secondary sources, blue: OpenEbench) show the 
                                availability of such features in the indicated sources. Bars indicate the actual number 
                                of retrieved metadata items. Variation of the amounts is a consequence of the lack of 
                                completeness of metadata annotation. 
                            </p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col 
                xl="9"
                lg="12"
                md="12"
                sm="12"
                cols="12">
                <v-card 
                    outlined
                    elevation="2"
                    class="pr-8"
                    :class="{'plot-card': !small , 'plot-card-small': small}">
                    <card-title text="Instances Coverage"></card-title>
                    <v-row 
                    align="center"
                    class="mt-0"
                    justify="space-around">
                        <v-col 
                        xl="9"
                        lg="9"
                        md="12"
                        sm="12"
                        cols="12">
                            <v-skeleton-loader
                                v-if="$store.state.data._unLoaded.coverageSources"
                                class="mb-5 ml-10 mr-10"
                                type="card"
                                />

                            <PlotSources :small="small" v-else />
                        </v-col>
                         <v-col 
                        xl="3"
                        lg="3"
                        md="11"
                        sm="11"
                        cols="12"
                        >
                            <p class="text--secondary mb-6 card-content caption"> 
                                <span class="highlight">Cumulative distribution of number of sources where individual instances are found (yellow).</span>
                                <br>
                                Stacked bars represent the contribution of each source in terms of number of metadata entries. 
                                Sources used to discover software and build an initial collection of instances are coloured in shades of green,
                                while those used to further enrich the initial collection are depicted in shades of red. 
                                OpenEBench, as an exception, is coloured in red while belonging to the latter category.
                            </p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col 
            xl="6"
            lg="6"
            md="6"
            sm="12"
            cols="12"
            >
                <v-card 
                outlined
                elevation="2"
                class="pr-5"
                :class="{'plot-card': !small , 'plot-card-small': small}">
                    <card-title text="(Meta)data Completeness"></card-title>
                      <v-row 
                        align="center"
                        class="mt-0"
                        justify="space-around">
                        <v-col 
                        xl="12"
                        lg="12"
                        md="12"
                        sm="12"
                        cols="12"
                        >
                            <v-skeleton-loader
                                v-if="$store.state.data._unLoaded.completeness"
                                class="mb-5 ml-10 mr-10"
                                type="card"
                                />
                            <Completeness v-else />
                        </v-col>

                        <v-col 
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            cols="12"
                            >
                                <p class="text--secondary mb-0 card-content caption"> 
                                    <span class="highlight">
                                        Distribution of number of features collected 
                                        on individual instances.
                                    </span>
                                    <br>
                                    The higher the number of features for an instance, the more 
                                    information gathered about that instance.
                                </p>
                            </v-col>
                      </v-row>

                </v-card>
            </v-col>
            <v-col
             xl="6"
            lg="6"
            md="6"
            sm="12"
            cols="12"
            align-self="start">
                <v-card
                    outlined
                    elevation="2"
                    class="pr-5 pb-3"
                    :class="{'plot-card': !small , 'plot-card-small': small}">
                    <card-title text="Types Of Software"></card-title>
                    <v-row 
                        align="center"
                        class="mt-0"
                        justify="space-around">
                        <v-col 
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            cols="12"
                            >
                            <v-skeleton-loader
                                v-if="$store.state.data._unLoaded.types"
                                class="mb-5 ml-10 mr-10"
                                type="card"
                                />
                            <PlotTypes v-else/>
                        </v-col>
                        <v-col 
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            cols="12"
                            align-self="start"
                            >
                            <p class="text--secondary mb-2 card-content caption"> 
                                <span class="highlight">Distribution of the types of
                                instances in the collection.</span>
                                <br>
                                Research Software may be implemented or accessed in different ways via web interface, REST API,
                                command line, workflow, etc. Current types captured are (<i>cmd, web, db, app, lib,
                                ontology, workflow, plugin, sparql, soap, script, rest, workbench, suite</i>)                           
                            </p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

        </v-row>
    </div>
</template>
<style scoped>

.card-main{
    background-color: #f5f5f5;
    margin: auto;
}

.plot-card{
    padding-left: 3em;
    padding-right: 3em;
    padding-bottom: 3em;
}

.plot-card-small{
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;
}


</style>
<script>
export default ({
    name:'Data',
    created() {
        this.$store.dispatch('data/getCountsPerSource');
        this.$store.dispatch('data/getTotalCount');
        this.$store.dispatch('data/getFeatures');
        this.$store.dispatch('data/getCoverageSources');
        this.$store.dispatch('data/getCompleteness');
        this.$store.dispatch('data/getTypes');

    },
    computed: {
        small(){
            return this.$vuetify.breakpoint.smAndDown
        }
    }
})
</script>

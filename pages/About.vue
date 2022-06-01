<template>
    <div>
        <v-row 
        justify="center">
            <v-col
            md="11"
            sm="11"
            xs="11"
            lg="11"
            xl="11">
            <v-card
            outlined
            elevation="1"
            class="pt-4 pl-6 pb-4">
            
                    <v-alert
                    elevation="0"
                    icon="mdi-book-open-variant"
                    color="#0b579f"
                    colored-border
                    dense
                    class="mt-3 ml-0 mr-0 mb-0"
                    >
                    <h3 class="text-subtitle ml-4 mb-4">Terminology</h3>
                    <p class="ml-4 text--secondary card-content alert-content"> 
                     <ul>
                         <li class="mb-2 mr-6">
                             <span class="highlight-info">Canonical Tool/Software:</span>: 
                             abstract notion of a given research software, as a computational solution that 
                             has been implemented and given an identity name by its author/s.
                         </li>
                         <li class="mb-2 mr-6">
                             <span class="highlight-info">Instance of a canonical tool/software:</span>
                             Each of the different ways in which a canonical tool is implemented, in terms of the way a 
                             user interacts with it, e.g. command-line applications, web applications, libraries; 
                             availability, e.g. desktop and/or web applications; or differences in the code that
                              are not big enough to justify considering them as distinct tools, e.g. different 
                              versions of the same software
                         </li>
                         <li class="mb-2 mr-6">
                             <span class="highlight-info">Primary Sources</span>: sources used to discover 
                            software and build an initial collection of instances. 
                        </li>
                        <li class="mb-2 mr-6">
                            <span class="highlight-info">Secondary sources</span>: sources mined to further enrich 
                            the initial collection of software metadata. They are identified through 
                            cross-referencies
                        </li>
                     </ul> 
                    </p>

                    </v-alert>

                <v-alert
                elevation="0"
                icon="mdi-database-arrow-down-outline"
                colored-border
                dense
                class="mt-3 ml-0 mr-0 mb-2"
                >
                     <h3 class="text-subtitle ml-4 mb-0">Data Availability</h3>
                    <p class="ml-4 text--secondary card-content alert-content"> 
                    Data and statistics are made available through the 
                    <a href="https://observatory.openebench.bsc.es/docs/api/">Software Observatory API</a>. 
                </p>
                </v-alert>

                <v-alert
                elevation="0"
                icon="mdi-file-link-outline"
                colored-border
                dense
                class="mt-3 ml-0 mr-0 mb-2"
                >
                 <h3 class="text-subtitle ml-4 mb-0">Citation</h3>
                    <p class="ml-4 text--secondary card-content alert-content"> 
                        <span class="citation-article mt-0">FAIRsoft - A practical implementation of FAIR principles for research software </span><br>
                        Eva Martín del Pico, Josep Lluís Gelpí, Salvador Capella-Gutiérrez<br>
                        bioRxiv 2022.05.04.490563; doi:<a href="https://doi.org/10.1101/2022.05.04.490563"> https://doi.org/10.1101/2022.05.04.490563</a>

                    </p>
                 </v-alert>

                <v-alert
                elevation="0"
                icon="mdi-script-text-outline"
                colored-border
                dense
                class="mt-3 ml-0 mr-0 mb-2"
                >
                 <h3 class="text-subtitle ml-4 mb-0">Terms of Use</h3>
                    <p class="ml-4 text--secondary card-content alert-content"> 
                    All data is distributed under a <a href="https://creativecommons.org/licenses/by-nd/2.0/">
                    CC-BY-ND</a> license.
                    </p>
                 </v-alert>
               
            </v-card>

            </v-col>
        </v-row>
    </div>
</template>
<style scoped>


.highlight-info{
    color: #0b579f;
    font-weight: 600;
}

.citation-article{
    font-size: 1rem !important;
}

</style>
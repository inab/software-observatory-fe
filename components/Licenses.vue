<template>
    <v-card
    outlined
    elevation="2" 
    class="pr-5">
        <v-row class="mb-0 pb-0">
            <v-col class="ml-8 mt-6 mb-pd-0">
                <h3 class="text-subtitle mb-4 text-center">Licensing</h3>
                <p class="text--secondary text-center card-content">
                    Licensing of software is one of the most crucial features of a piece of software, 
                    determining both its <span class="highlight">Accessibility</span> and <span class="highlight">Reusability</span>.
                </p>
            </v-col>
        </v-row>
            
        <v-row class="mt-0 pt-0" align="center">
            <v-col
            md="5"
            lg="5"
            sm="12"
            xs="12"
            class="pt-0"
            >
                <PlotLicensesPie />
            </v-col>
            <v-col style="position: relative ml-10"
            md="7"
            lg="7"
            sm="12"
            xs="12">
                <LicensesDetail />
            </v-col>
        </v-row>
    </v-card>
</template>
<style scoped>
.text-subtitle{
    color: black;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 1.4em;
}

.card-content{
    font-size: .9em !important
}

.highlight{
    color: #001752f8;
    font-weight: 600;
}
</style>

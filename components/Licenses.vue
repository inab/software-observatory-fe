<template>
    <v-card>
        <v-row align="center">
            <v-col
            md="6"
            lg="6"
            sm="12"
            xs="12"
            >
                <PlotLicensesPie />
            </v-col>
            <v-col style="position: relative"
            md="6"
            lg="6"
            sm="12"
            xs="12">
                <LicensesDetail />
            </v-col>
        </v-row>
    </v-card>
</template>
<style scoped>
.v-card{
    padding-right: 2em;
}
</style>

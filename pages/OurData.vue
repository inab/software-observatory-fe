<template>
    <div>
        <v-row>
            <v-col cols="12">
            <h2>Data Sources</h2>
            </v-col>
            <MainCards />
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Data Overview</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <PlotOverview />
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12">
                <PlotSources />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <Completeness />
            </v-col>
            <v-col cols="6">
                <PlotTypes />
            </v-col>
        </v-row>
    </div>
</template>
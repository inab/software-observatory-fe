<template>
  <v-row 
    justify="center"
    >
        <v-col
        md="6"
        sm="11"
        cols="11"
        lg="6"
        xl="6">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="Findability"></card-title>
            <tabs-plot-info
            class="pr-3"
            plotComponent="FindabilityPlot"
            infoComponent="FTable"
            caption="">
            </tabs-plot-info>
        </v-card>
        </v-col>

        <v-col
        md="6"
        sm="11"
        cols="11"
        lg="6"
        xl="6">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="Accessibility"></card-title>
          <tabs-plot-info
          class="pr-3"
          plotComponent="AccessibilityPlot"
          infoComponent="ATable"
          caption="">
          </tabs-plot-info>
        </v-card>
        </v-col>

        <v-col
        md="6"
        sm="11"
        cols="11"
        lg="6"
        xl="6">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="Interoperability"></card-title>
          <tabs-plot-info
          class="pr-3"
          plotComponent="InteroperabilityPlot"
          infoComponent="ITable"
          caption="">
          </tabs-plot-info>
        
        </v-card>
        </v-col>
        <v-col
        md="6"
        sm="11"
        cols="11"
        lg="6"
        xl="6">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="(Re)Usability"></card-title>
          <tabs-plot-info
            class="pr-3"
            plotComponent="ReusabilityPlot"
            infoComponent="RTable"
            caption="">
            </tabs-plot-info>
        </v-card>
        </v-col>
</v-row>
</template>
<script>

export default{
  created() {
    this.$store.dispatch('data/getFAIRscores')
    }
  }

</script>


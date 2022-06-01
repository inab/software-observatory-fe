<template>
  <v-card
    outlined
    elevation="2">
    <v-container>
      <v-row class="pt-0">
        <v-col cols="7" class="mt-0 pt-0">
          <h3 class="text-subtitle mt-6 mb-4 text-center">Version Control</h3>
            <p class="text--secondary mb-2 text-center card-content-vs">
                Version control offers a standardized record of source code changes, making it easier to be 
                <span class="highlight">Reused.</span></p>
            <p class="mt-0 text--secondary text-center card-content-vs">
              The main version control systems also allow straighforward <span class="highlight">Accessibility</span>.
            </p>
        </v-col>
        <v-col cols="5" align-self="center">
          <v-card class="mt-2 mr-2 number-card" color="#f5971b" elevation="0">
            <v-card-text class="text-center number">25%</v-card-text>
            <v-card-text  class="text-center number-text">of instances use <span class="number-highlight">version control</span></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
            <VersionControlPlot />
        </v-col>
        <v-col 
          xl="10"
          lg="10"
          md="10"
          sm="12"
          cols="12"
          align-self="start"
          >
            <p class="text--secondary mt-0 mb-2 ml-8 card-content caption"> 
              <span class="highlight">Distribution of main version control technologies</span>                     
            </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<style scoped>
.v-card{
    margin: auto;
    padding: auto;
}

.number-card{
  word-break: break-all;
  opacity: .9;
}

.number{
  font-size: 3rem;
  padding-top: .6em;
  padding-bottom: .2em;
  color: white !important;
}

.number-text{
  color: white !important;
  font-family: Roboto, sans-serif;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.4em;
  word-break: initial;
  padding: .6em;
}

.number-highlight{
  font-weight: 700;
}

.text-subtitle{
    color: black;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 1.4em;
}

.highlight{
    color: #001752f8;
    font-weight: 600;
}

.card-content-vs{
    font-size: .9em !important;
    width: 95%;
    margin: auto;
}
</style>
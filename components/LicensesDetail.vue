<template>
    <v-div style="height:90%;position:relative">
      <v-row>
        
      </v-row>

        <PlotLicensesBars />
        <v-btn
           icon
           color="#2e579e"
           elevation="1"
           small
           style="float: right;"
          @click="overlay = !overlay"
        >
          <v-icon v-if="!overlay" color="#2e579e">mdi-information-variant</v-icon>
          <v-icon v-else color="#2e579e" small>mdi-close</v-icon>

        </v-btn>

         <v-overlay
          :absolute="absolute"
          :value="overlay"
          :opacity=.9
          color="white"
          @click="overlay = false"
        >
          <LicensesTable />
        </v-overlay>


         
        
       
        
    </v-div>
                
</template>
<script>
export default {
    data: () => ({
      absolute: true,
      overlay: false,
    }),
  }
</script>
<style scoped>
.v-btn{
    margin-right: 2em;
    margin-bottom: 2em;
    margin-top: 0;
}

</style>

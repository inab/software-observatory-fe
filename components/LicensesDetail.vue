<template>
       <v-tabs slider-size="1" right>
      <v-tab>
				<v-icon>mdi-chart-scatter-plot </v-icon>
			</v-tab>
        <v-tab>
				<v-icon>mdi-book-open-variant</v-icon>
			</v-tab>
      <v-tab-item
        :transition="false"
        class="pt-2 pb-2 pr-2"
        >
        <PlotLicensesBars />
        </v-tab-item>
      <v-tab-item 
            :transition="false"
            class="pt-2 pb-2 pr-5">
             <LicensesTable />
      </v-tab-item>

      </v-tabs>                        
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
    margin-bottom: 1em;
    margin-top: 0;

}

</style>

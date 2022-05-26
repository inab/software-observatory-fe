<template>
  <div id="plot_1"></div>
</template>

<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
  data(){
    return {
      data_licenses: {
          "ids": ["Total", "No license stated", "Unambiguous", "Open Source", "other", "Ambiguous", "BSD", "GPL", "MIT", "Artistic", "LGPL", "Apache", "other OS"], 
          "parents": ["", "Total", "Total", "Unambiguous", "Unambiguous", "Total", "Open Source", "Open Source", "Open Source", "Open Source", "Open Source", "Open Source", "Open Source"], 
          "v": [43987, 24578, 17552, 14979, 2573, 1857, 785, 6691, 3686, 1570, 649, 980, 618]
        },
      layout: {
        yaxis: {
                title: ''
                },
        xaxis: {
            title: ''
        },
        showlegend: false

      },
      config: {
        responsive: true,
        displayModeBar: false
      }
    }
  },
  mounted() {
    var trace = {
        labels: this.data_licenses.ids,
        parents: this.data_licenses.parents,
        values: this.data_licenses.v,
        branchvalues:'total'
    } 

    Plotly.newPlot('plot_1', {
      "data": trace,
      "layout": this.layout,
      "config": this.config
        })
    }
}
</script>


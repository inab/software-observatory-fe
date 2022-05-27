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
          "text": ["Total", "Total", "Total", "Unambiguous", "Unambiguous", "Total", "Open Source", "Open Source", "Open Source", "Open Source", "Open Source", "Open Source", "Open Source"], 
          "v": [43987, 24578, 17552, 14979, 2573, 1857, 785, 6691, 3686, 1570, 649, 980, 618]
        },
      layout: {
        yaxis: {
                title: ''
                },
        xaxis: {
            title: ''
        },

        height:500,
        autosize: true,
        margin: {
          t:70,
          b:0,
          l:0,
          r:0
        },
        hoverlabel: { bgcolor: "#FFF" },
      },
      config: {
        responsive: true,
        displayModeBar: false
      }
    }
  },
  mounted() {
    var trace = {
        type: "sunburst",
        labels: this.data_licenses['ids'],
        parents: this.data_licenses['parents'],
        values: this.data_licenses['v'],
        branchvalues: 'total',
        textinfo:"label",
        rotation: '152',
        marker: {
          autocolorscale: true
        },
        text: this.data_licenses.text,
        hovertemplate: '<b>%{label}</b><br>' +
                        '%{value:,d} instances<br>' +
                        '%{percentParent:.1%} of %{text}<extra></extra>'
    } 


    console.log(trace)

    Plotly.newPlot('plot_1', {
      "data": [trace],
      "layout": this.layout,
      "config": this.config
        })
    }
}
</script>


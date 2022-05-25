<template>
  <v-card>
    <div id="plot_3"></div>
  </v-card>
</template>
<style scoped>
#plot {
  padding: 0%;
  margin: 0%;
}

.v-card {
  padding: 4em;
  clear: left;
}

#plot .modebar {
  display: none !important;
}
</style>
<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
    data() {
        return {
            data_cumm : {
                "feat_num": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 
                "count_cumm": [0, 0, 0, 0, 0, 0, 120, 127, 219, 1507, 3967, 8824, 10835, 13512, 17599, 21630, 26324, 28175, 30328, 32495, 36146, 38503, 42254, 43181, 43767, 43911]
                },
            features_xy: {
                "y": [9, 16, 21, 13, 15, 11, 22, 17, 18, 14, 20, 10, 19, 12, 23, 24, 25, 6, 8, 26, 7],
                "x": [1288, 4694, 2357, 2677, 4031, 4857, 3751, 1851, 2153, 4087, 3651, 2460, 2167, 2011, 927, 586, 144, 120, 92, 76, 7]
                },
            layout: {
                grid: {
                    rows: 2,
                    columns: 1,
                    roworder: 'bottom to top'
                },
                yaxis: {
                    title: 'Number of <br> instances'
                },
                xaxis: {
                    title: 'Number of features'
                },
                yaxis2: {
                    title : 'Number of <br> instances'
                    },
                showlegend: false
            },
            config: {
                responsive: true,
                displayModeBar: false}
            }
    },
    mounted() {
        var trace_line = {
            y: this.data_cumm['count_cumm'],
            x: this.data_cumm['feat_cumm'],
            type: 'scatter',
            mode: 'lines',
            marker: {
                color: '#446fbd'
            },
            yaxis: 'y2',
             hovertemplate: '%{y:,d} instances have <br> %{x} features or less<extra></extra>'
        }

        var trace_bar = {
            y: this.features_xy['x'],
            x: this.features_xy['y'],
            type:'bar',
            marker: {
                color: '#ad3d32'
            },
            hovertemplate: '%{y:,d} instances have <br> %{x} features<extra></extra>'
        }

        var data = [trace_bar, trace_line]

        Plotly.newPlot('plot_3', /* JSON object */ {
            "data": data,
            "layout": this.layout,
            "config": this.config
            })
    },
    methods: {

    }
}
</script>

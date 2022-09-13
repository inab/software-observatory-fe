<template>
    <div id="plot_22"></div>
</template>
<style scoped>
#plot {
  padding: 0%;
  margin: 0%;
}


#plot .modebar {
  display: none !important;
}
</style>
<script>
import Plotly from '../assets/plotly-2.12.1.min.js'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
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
                showlegend: false,
                autosize: true,
                margin: {
                    autoexpand: true,
                    t:0
                }
            },
            config: {
                responsive: true,
                displayModeBar: false}
            }
    },
    computed: {
        ...mapGetters( 'data', {
            completeness : 'Completeness'
        })
    },

    mounted() {
        var trace_line = {
            y: this.completeness['cummulative_features']['count_cumm'],
            x: this.completeness['cummulative_features']['feat_cumm'],
            type: 'scatter',
            mode: 'lines',
            marker: {
                color: '#446fbd'
            },
            yaxis: 'y2',
             hovertemplate: '%{y:,d} instances have <br> %{x} features or less<extra></extra>'
        }

        var trace_bar = {
            y: this.completeness['distribution_features']['x'],
            x: this.completeness['distribution_features']['y'],
            type:'bar',
            marker: {
                color: '#ad3d32'
            },
            hovertemplate: '%{y:,d} instances have <br> %{x} features<extra></extra>'
        }

        var data = [trace_bar, trace_line]

        Plotly.newPlot('plot_22', /* JSON object */ {
            "data": data,
            "layout": this.layout,
            "config": this.config
            })
    },
    methods: {

    }
}
</script>

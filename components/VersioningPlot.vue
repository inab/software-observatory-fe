<template>
    <div id="plot_3"></div>
</template>

<script>
import Plotly from '../assets/plotly-2.12.1.min.js'
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            layout: {
                showlegend: true,
                hoverlabel: { bgcolor: "#FFF" },
                height: 220,
                autosize: true,
                margin: {
                    t:20,
                    l:0,
                    r:0,
                    b:20
                }
            },
            config: {
                responsive: true,
                displayModeBar: false}
            }
    },
    computed: {
    ...mapGetters({
      data_versioning : 'trends/SemanticVersioning'
    })

    },
    mounted() {
        var trace = {
            labels: this.data_versioning['labels'],
            values: this.data_versioning['values'],
            type:'pie',
            hole: 0.4,
            direction: 'clockwise',
            sort: false,
            marker: {
                colors:  ['#15264a', '#3a5ba1', '#bdc6d9'],
            },
            hovertemplate: '<b>%{label}</b><br>%{value:,d} instances<br>%{percent:.0%} of all instances<extra></extra>'
        }

        Plotly.newPlot('plot_3', /* JSON object */ {
            "data": [trace],
            "layout": this.layout,
            "config": this.config
            })
    }
}
</script>

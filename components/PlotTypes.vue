<template>
    <div id="plot_23"></div>
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
            data_types : {
                "cmd": 17170, 
                "script": 716, 
                "lib": 8191, 
                "db": 1951, 
                "unknown": 3087, 
                "web": 6040, 
                "workflow": 403, 
                "app": 1779, 
                "rest": 301, 
                "plugin": 212, 
                "soap": 565, 
                "undefined": 2971, 
                "ontology": 35, 
                "suite": 332, 
                "workbench": 223, 
                "sparql": 11
                },
            layout: {
                yaxis: {
                    title: '',
                    categoryorder: 'total ascending'
                },
                xaxis: {
                    title: 'Number of instances'
                },
                showlegend: false,
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
    mounted() {
        var data = this.build_data()

        var labels = data['types']
        var newLabels = labels.map( function(lab){
            return lab + '   '
        })

        var trace = {
            x: data['values'],
            y: newLabels,
            type: 'bar',
            orientation: 'h',
            marker: {
                color: '#ebd471'
            },
            hovertemplate: '%{y} <br> %{x:,d} instances <extra></extra>',

        }

        Plotly.newPlot('plot_23', /* JSON object */ {
            "data": [trace],
            "layout": this.layout,
            "config": this.config
            })
    },
    methods: {
        build_data(){
            var new_values = {
                'values':[],
                'types':[]
            }
            for (var [key, value] of Object.entries(this.data_types)) {
                new_values['types'].push(key)
                new_values['values'].push(value)
            }
            return new_values
            }
    }
}
</script>

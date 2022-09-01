<template>
    <div>
        <div id="myDiv3">
    </div>
    </div>
</template>
<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
    data() {
        return {
            labels : {
               'I1':'I1. <br>Documentation on <br> Input/output <br> datatypes and <br> formats ', 
              'I2':'I2. <br> Workflow <br> compatibility', 
              'I3':'I3. <br>Dependencies <br>availability'
              },

            config : {
                responsive: true,
                displayModeBar: false}
        }
    },
    computed: {
      FAIRscores(){
        return this.$store.getters['data/FAIRscores']
        }
      },
      created() {
        this.$store.dispatch('data/getFAIRscores')
        },
    mounted(){        
        var traces = this.build_traces()
        var layout = {
            hovermode: "closest",
            autosize: true,
            yaxis: {
                showgrid: true
            },
            title: "",
            legend: {
                tracegroupgap: 0
            },
            margin:{
                autoexpand: true,
                t:10,
                l:150
            },
            violingap: 0,
            violingroupgap: 0,
            violinmode: "overlay",
            height: 350
        }

        Plotly.newPlot("myDiv3", {
             "data": traces, 
             "layout":layout, 
             "config": this.config})


    },
    methods: {
        build_traces(){
            var traces =[]
            console.log(this.FAIRscores)
            for (var [key, value] of Object.entries(this.FAIRscores['I'])){
                var trace = {
                    text: "",
                    hoveron: "points+percent",
                    meanline: {
                        visible: true
                    },
                    legendgroup: "score",
                    scalegroup: "score",
                    points: "all",
                    pointpos: 1,
                    box: {
                        visible: false
                    },
                    jitter: 0,
                    scalemode: "count",
                    marker: {
                        line: {
                            width: 2,
                            color: "#bebada"
                        },
                        symbol: "line-ns"
                    },
                    showlegend: false,
                    side: "positive",
                    type: "violin",
                    name: "score",
                    span: [
                        0
                    ],
                    line: {
                        color: "#f5a142"
                    },
                    y0: this.labels[key],
                    x: value,
                    orientation: "h"
                }

                traces.push(trace)
            }
            return(traces)

        }
    }
}
</script>

<template>
    <div>
        <div id="myDiv4">
    </div>
    </div>
</template>
<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
    data() {
        return {
            labels : {
                'R1':'R1. <br> Existence of <br> usage documentation', 
              'R2':'R2. <br> Existence of <br> License', 
              'R3':'R3. <br> Contributors <br> recognition', 
              'R4':'R4. <br> Provenance <br> availability'},

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

        Plotly.newPlot("myDiv4", {
             "data": traces, 
             "layout":layout, 
             "config": this.config})


    },
    methods: {
        build_traces(){
            var traces =[]
            console.log(this.FAIRscores)
            for (var [key, value] of Object.entries(this.FAIRscores['R'])){
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
                            color: "#f5a142"
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
                        color: "#bebada"
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

<template>
    <div>
        <div id="myDiv">
    </div>
    </div>
</template>
<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
    data() {
        return {
            labels : {
                'F3':'F3.<br> Searchability',
                'F2':'F2.<br> Existence <br> of Metadata',
                'F1':'F1.<br> Identity <br> uniqueness'},

            annots: {
                'F3': {0.0: '4684', 0.7: '8985', 0.85: '18606', 1.0: '11712'}, 
                'F2': {0.0: '3275', 0.6: '13057', 1.0: '27655'}, 
                'F1': {0.8: '25397', 1.0: '18590'}
            },

            annots_2: {
                'F3': ['4684', '8985', '18606', '11712'], 
                'F2': ['3275', '13057','27655'], 
                'F1': ['25397', '18590']
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

        Plotly.newPlot("myDiv", {
             "data": traces, 
             "layout":layout, 
             "config": this.config})


    },
    methods: {
        build_traces(){
            var traces =[]
            var annots = {
                       'F3.<br> Searchability': ['4684', '8985', '18606', '11712'], 
                        'F2.<br> Existence <br> of Metadata': ['3275', '13057','27655'], 
                        'F1.<br> Identity <br> uniqueness': ['25397', '18590']
                    }
            console.log(this.FAIRscores)
            for (var [key, value] of Object.entries(this.FAIRscores['F'])){

                var trace = {
 
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
                    ids: annots[key],
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

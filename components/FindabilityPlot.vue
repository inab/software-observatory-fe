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
                'F1':{'0': 0.423, '0.85':0.577},
                'F2':{'0.297, 0.629,0.74},
                'F3':{0.106, 0.423, 0.266, 0.204},
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
            console.log(this.FAIRscores)
            for (var [key, value] of Object.entries(this.FAIRscores['F'])){
                var trace = {
                    hoveron: "points+kde+violins+text",
                    meta:this.annots[key],
                    hovertemplate: "%{meta[x]}",
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

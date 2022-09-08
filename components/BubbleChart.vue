<template>
    <div>
        <div id="myDiv">
    </div>
    </div>
</template>
<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
    props: {
        fair_scores: {
            type: Object,
            required: true
        },
        labels: {
            type: Object,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },
    data() {
        return {         
            config : {
                responsive: true,
                displayModeBar: false},
            colors: ['#5da4d6', '#ff900e',  '#2ca065'],
            colors_lines: ['#0075c7', '#995302',  '#046b37']
        }
    },
    // Access store in parent and pass data as prop
    //computed: {
    //  FAIRscores(){
    //    return this.$store.getters['data/FAIRscores']
    //    }
    //  },
    //  created() {
    //    this.$store.dispatch('data/getFAIRscores')
    //    },
    mounted(){        
        var traces = this.build_traces()
        var layout = {
            title: this.title,
            yaxis: {
                title: "Indicator",
                showline: false,
             },
            xaxis: {
                title: 'Score',
                zeroline: false,
                showline: true
            },
            showlegend: false,
            height: 600,
            width: 600,
            hovermode: "closest",
            hoverlabel: { bgcolor: "#FFF" }
            };  


        Plotly.newPlot("myDiv", {
             "data": traces, 
             "layout":layout, 
            })


    },
    methods: {
        build_traces(){
            var traces =[]

            //  DOING: fill with values from FAIR scores 
            for (let i = 0, len = this.fair_scores.length; i < len; i++){
                var item = this.fair_scores[i]
                var trace = {
                    y:  Array(item.scores.length).fill(this.labels[item.indicator]), 
                    x: item.scores,
                    name: this.labels[item.indicator],
                    text: item.count,
                    textposition: 'inside',
                    texttemplate: '%{text:,}',
                    hovertemplate: 'Score: %{x:.2f},<br> Number of tools: %{text:,} <extra></extra>',
                    mode: 'markers', //'markers+text' shows text inside
                    textfont: {
                        size: 14,
                    },
                    marker: {
                        size: item.count,
                        sizeref: 10, //scaling factor
                        sizemode: 'area',
                        color: Array(item.scores.length).fill(this.colors[i]),
                        line: {
                            width: 1.5,
                            color: Array(item.scores.length).fill(this.colors_lines[i])
                        }
                    }
                }
                traces.push(trace)
            }
            return(traces)
        }
    }
}
</script>

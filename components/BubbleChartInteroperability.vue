<template>
    <div>
        <div id="interoperability">
    </div>
    </div>
</template>
<script>
import Plotly from 'plotly.js-dist'
import { mapGetters } from 'vuex';


export default {
    data() {
        return {         
            config : {
                responsive: true,
                displayModeBar: false},
            colors: ['#5da4d6', '#ff900e',  '#2ca065', '#bd86f0'],
            colors_lines: ['#0075c7', '#995302',  '#046b37', '#54287d']
        }
    },
    computed: {
        ...mapGetters('fairness', {
            fair_scores : 'FAIRscores',
            control_fair_scores : 'ControlFAIRscores',
            current_collection : 'CurrentCollection',
        }),
    },
    mounted(){        
        var traces = this.build_traces()
        var layout = {
            yaxis: {
                title: "Indicator",
                showline: false,
             },
            xaxis: {
                title: 'Score',
                zeroline: false,
                showline: true
            },
            showlegend: true,
            height: 350,
            hovermode: "closest",
            hoverlabel: { bgcolor: "#FFF" },
            autosize: true,
            margin:{
                autoexpand: true,
                t:20,
                l:150
            },
            };  


        Plotly.newPlot("interoperability", {
             "data": traces, 
             "layout":layout, 
            })
    },
    methods: {
        build_traces(){
            var traces =[]
            
            if(this.current_collection ==='tools'){
                    var collection = 'All tools'
                }else{
                    var collection = this.current_collection
                }

            //control scores
            if(this.current_collection != 'tools'){
                var scores = this.control_fair_scores['I']['fair_scores']
                var labels = this.control_fair_scores['I']['labels']
                for (let i = 0, len = scores.length; i < len; i++){
                    var item = scores[i]
                    var trace = {
                        y:  Array(item.scores.length).fill(labels[item.indicator]), 
                        x: item.scores,
                        name: 'All tools'+ ' - ' + item.indicator,
                        customdata: item.count,
                        text: item.percent,
                        textposition: 'inside',
                        texttemplate: '%{text:,.1%}',
                        hovertemplate: 'Score: %{x:.2f}<br>Tools: %{customdata:,}<br>Percentage: %{text:,.1%}',
                        mode: 'markers', //'markers+text' shows text inside
                        textfont: {
                            size: 14,
                        },
                        marker: {
                            size: item.percent,
                            sizeref: .0003, //scaling factor
                            sizemode: 'area',
                            color: Array(item.scores.length).fill('#bfbfbf'),
                            line: {
                                width: 1.5,
                                
                            }
                        }
                    }
                    traces.push(trace)
                }
            }

            //collection scores
            var scores = this.fair_scores['I']['fair_scores']
            var labels = this.fair_scores['I']['labels']
            for (let i = 0, len = scores.length; i < len; i++){
                var item = scores[i]
                var trace = {
                    y:  Array(item.scores.length).fill(labels[item.indicator]), 
                    x: item.scores,
                    name: collection + ' - ' + item.indicator,
                    customdata: item.count,
                    text: item.percent,
                    textposition: 'inside',
                    texttemplate: '%{text:,.1%}',
                    hovertemplate: 'Score: %{x:.2f}<br>Tools: %{customdata:,}',
                    mode: 'markers+text', //'markers+text' shows text inside
                    textfont: {
                        size: 14,
                    },
                    marker: {
                        size: item.percent,
                        sizeref: .0003, //scaling factor
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

<template>
    <div id="plot_21"></div>
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

export default {
    props: ['small'],
    data() {
        return {
            counts: {
                "sourceforge": [3087, 7, 294, 85, 36, 11], 
                "opeb_metrics": [0, 20484, 12377, 2714, 408, 58], 
                "github": [0, 0, 10516, 1237, 374, 53], 
                "toolshed": [4742, 25, 339, 162, 127, 55], 
                "bitbucket": [0, 0, 309, 43, 28, 6], 
                "bioconductor": [4, 1, 475, 1371, 230, 2], 
                "bioconda": [65, 3294, 3792, 2647, 408, 58], 
                "galaxy": [1, 1200, 182, 19, 40, 48], 
                "biotools": [13, 16017, 8847, 2578, 389, 57]
                },
            nums: ['1', '2', '3', '4', '5'],
            colors_primary:['#1d4421', '#3d643f', '#5d865e', '#80aa80', '#a3cfa3', '#c9f5c8'],
            colors_secondary:['#b72f1e', '#f88b69',  '#f9d3c6', '#3669a3'],
            titles:{
                'github': 'GitHub', 
                'galaxy': 'Galaxy Europe',
                'bioconda': 'Bioconda', 
                'toolshed': 'Galaxy Toolshed',
                'biotools': 'bio.tools', 
                'bioconductor':'Bioconductor', 
                'sourceforge':'SourceForge', 
                'bitbucket':'Bitbucket', 
                'opeb_metrics':'OpenEBench'
            },
            counts_cummulative: {
                "1": 7912, 
                "2": 28426, 
                "3": 40803, 
                "4": 43517, 
                "5": 43925, 
                "6": 43983, 
                "7": 43987, 
                "8": 43987, 
                "9": 43987},
            layout_base: {
                barmode: 'stack',
                xaxis: {
                    title: 'Number of sources'
                },
                yaxis: {
                    title: 'Number of instances'
                },
                autosize: true,
                height: 300,
                margin: {
                    autoexpand: true,
                    t:0,
                    b: 40
                }
            },
            config: {
                responsive: true,
                displayModeBar: false}
            }
    },
    mounted() {
        var colors = {
                'github': this.colors_secondary[0], 
                'galaxy': this.colors_primary[1],
                'bioconda': this.colors_primary[3], 
                'toolshed': this.colors_primary[2],
                'biotools': this.colors_primary[0], 
                'bioconductor': this.colors_primary[4], 
                'sourceforge': this.colors_primary[5], 
                'bitbucket': this.colors_secondary[1], 
                'opeb_metrics': this.colors_secondary[3]
            }

        var data = this.build_bar_traces(colors)

        var line_data = {
            x: this.nums,
            y: this.nums.map(this.build_line_trace),
            marker: {
                color: '#FFD700'
            },
            name:'Instances',
            hovertemplate: '%{x} sources or less: %{y:,d} instances <extra></extra>',
            type: 'line'
        }

        data.push(line_data)
        
        Plotly.newPlot('plot_21', /* JSON object */ {
            "data": data,
            "layout": this.layout,
            "config": this.config
            })
    },
    computed:{
        layout(){
            var l = this.layout_base
            if(this.small){
                l["legend"] = {orientation: "h", y:5, x:-0.2, size: 15}
                return l
            }else{
                l["legend"] = {}
                return l

            }

}

    },
    methods: {
        build_bar_traces(colors){
            var traces = []
            for (var [key, value] of Object.entries(this.counts)) {
                var trace = {
                    x: this.nums,
                    y: this.counts[key],
                    name: this.titles[key],
                    marker: {
                        color: colors[key]
                        },
                    type: 'bar',
                    meta: this.titles[key],
                    hovertemplate: 'Of instances found in %{x} sources: <br>'+
                                    '%{y:,d} are found in %{meta} <extra></extra>'
                }
                traces.push(trace)
            }
            return traces
        },
        build_line_trace(n){
            return this.counts_cummulative  [n]
        }
    }
}
</script>
<style scoped>
.js-plotly-plot .plotly .main-svg .infolayer .legend{
    width: 100% !important;
}
</style>

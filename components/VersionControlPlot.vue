<template>
  <div id="plot_4"></div>
</template>

<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
  data(){
    return {
      data: {"github": 12704, "bitbucket": 401, "sourceforge": 3997, "gitlab": 264},
      labels:{
          'gitlab':'<a href="https://gitlab.com/gitlab-org/gitlab", taget="blank_">GitLab    </a>',
          'bitbucket':'<a href="https://bitbucket.org/", taget="blank_">Bitbucket    </a>',
          'sourceforge':'<a href="https://sourceforge.net/", taget="blank_">SourceForge    </a>',
          'github':'<a href="https://github.com/gitlab", taget="blank_">GitHub    </a>', 
      },
      layout: {
        showlegend: false,
        yaxis:{
            automargin: true
        },
        xaxis:{
            title: 'Number of instances'
        },
        margin: {
            autoexpand: true,
            t:10,
            b:50
        },
        autosize: true,
        height: 275,
        hoverlabel: { bgcolor: "#FFF" }
      },
      config: {
        responsive: true,
        displayModeBar: false
      }
    }
  },
  mounted() {
    var trace = this.build_trace(this.data, this.labels)
    Plotly.newPlot('plot_4', {
      "data": [trace],
      "layout": this.layout,
      "config": this.config
        })
    },
      methods: {
    build_trace(data, labs){
        var x = []
        var y = []
        for (var [key, value] of Object.entries(data)) {
            x.push(value)
            y.push(key)
        }
        var trace = {
            type: "bar",
            y: y.map(function(a){return labs[a]}),
            x: x,
            orientation: 'h',
            marker: {
            color: '#31488c',
            },
            hoverinfo: 'x',
            hovertemplate: '%{x:,d} instances <extra></extra>'
        }
        return trace
    }
  }
}
</script>

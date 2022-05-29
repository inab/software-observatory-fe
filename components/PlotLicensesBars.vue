<template>  
    <div id="plot_2"></div>
</template>

<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
  data(){
    return {
      data_licenses: {
          "license": ["BSD", "GPL", "MIT", "Artistic", "LGPL", "Apache", "other OS"],
          "licenses_copyleft" : ['Artistic', 
                                  "MIT", 
                                  "Apache", 
                                  "BSD"],
          "counts_copyleft": [1570, 3686, 980, 785],
          "licenses_sp":["GPL", "AGPL", "LGPL", "CeCILL-C"],
          "counts_sp":[6691, 649, 649, 543],
          "licenses_data":['CC'],
          "counts_data":[335]
        },
      labs: {
        'Artistic': '<a href="https://opensource.org/licenses/artistic-license">Artistic</a>',
        'MIT':'<a href="https://opensource.org/licenses/MIT">MIT</a>',
        'Apache':'<a href="https://opensource.org/licenses/apachepl.php">Apache</a>',
        'BSD': '<a href="https://www.freebsd.org/doc/en_US.ISO8859-1/articles/bsdl-gpl/article.html">BSD</a>',
        "GPL":'<a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL</a>',
        "AGPL":'<a href="https://www.gnu.org/licenses/agpl-3.0.html">AGPL</a>',
        "LGPL":'<a href="https://www.gnu.org/licenses/lgpl-3.0.html">LGPL</a>',
        "CeCILL-C":'<a href="https://spdx.org/licenses/CECILL-C.html">CeCILL-C</a>',
        'CC':'<a href="https://creativecommons.org/licenses/">CC</a>'
      },
      layout: {
        yaxis: {
                title: 'Number of instances'
                },
        xaxis: {
            title: 'License Family/Type',
            categoryorder:'total ascending'
        },
        hoverlabel: { bgcolor: "#FFF" },
        autosize: true,
        height: 300,
        margin: {
          autoexpand: true,
          b:100,
          t:20,
          r:50
          }
      },
      config: {
        responsive: true,
        displayModeBar: false
      }
    }
  },
  mounted() {
    var trace = {
        type: "bar",
        x: this.data_licenses['license'],
        y: this.data_licenses['count'],

        text: this.data_licenses.text,
        hovertemplate: '<b>%{label}</b><br>' +
                        '%{value:,d} instances<br>' +
                        '%{percentParent:.1%} of %{text}<extra></extra>'
    } 

    var trace_1 = this.build_trace(this.data_licenses['licenses_copyleft'], this.data_licenses['counts_copyleft'], 'copyleft', '#eb9b34', '#eb9b34', this.labs)
    var trace_2 = this.build_trace(this.data_licenses['licenses_sp'], this.data_licenses['counts_sp'], 'permissive', '#f5bb71', '#eb9b34', this.labs)
    var trace_3 = this.build_trace(this.data_licenses['licenses_data'], this.data_licenses['counts_data'], 'data', '#9e5f66','#73343b', this.labs)


    Plotly.newPlot('plot_2', {
      "data": [trace_1, trace_2, trace_3],
      "layout": this.layout,
      "config": this.config
        })
    },
  methods: {
    build_trace(x, y, name, color, border, labs){
      var trace = {
        type: "bar",
        x: x.map(function(a){return labs[a]}),
        y: y,
        name: name,
        marker: {
          color: color,
          opacity: .9,
          line: {
            color: border,
            width: 1
          }
        }
      }
      console.log(trace)
      return trace

    }
  }

}
</script>


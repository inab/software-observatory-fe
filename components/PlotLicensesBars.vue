<template>
    <div id="plot_2"></div>
</template>

<script>
import Plotly from '../assets/plotly-2.12.1.min.js'
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      labs: {
        'Artistic': '<a href="https://opensource.org/licenses/artistic-license">Artistic</a>',
        'MIT':'<a href="https://opensource.org/licenses/MIT">MIT</a>',
        'Apache':'<a href="https://opensource.org/licenses/apachepl.php">Apache</a>',
        'BSD': '<a href="https://www.freebsd.org/doc/en_US.ISO8859-1/articles/bsdl-gpl/article.html">BSD</a>',
        "GPL":'<a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL</a>',
        "AGPL":'<a href="https://www.gnu.org/licenses/agpl-3.0.html">AGPL</a>',
        "LGPL":'<a href="https://www.gnu.org/licenses/lgpl-3.0.html">LGPL</a>',
        "CeCILL-C":'<a href="https://spdx.org/licenses/CECILL-C.html">CeCILL-C</a>',
        "CeCILL":'<a href="https://spdx.org/licenses/CECILL-C.html">CeCILL-C</a>',
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
          b:70,
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
  computed: {
    ...mapGetters( 'trends', {
      data_licenses : 'LicensesOpenSource'
    }),

    trace_1(){
      var trace_1 = this.build_trace('licenses_copyleft', 'counts_copyleft', 'copyleft', '#eb9b34', '#ffffff', this.labs)
      return trace_1
    },

    trace_2(){
      var trace_2 = this.build_trace('licenses_permissive', 'counts_permissive', 'permissive', '#ffc400', '#ffffff', this.labs)
      return trace_2
    },

    trace_3(){
      var trace_3 = this.build_trace('licenses_data', 'counts_data', 'data', '#438a3e', '#ffffff', this.labs)
      return trace_3
    }

  },

  mounted() {
    if (this.$store.state.trends._licensesOpenSource.licenses_copyleft.length > 0) {
        var trace_1 = this.trace_1
        var trace_2 = this.trace_2
        var trace_3 = this.trace_3
        Plotly.newPlot('plot_2', {
        "data": [trace_1, trace_2, trace_3],
        "layout": this.layout,
        "config": this.config
          })
    }
      
    },
  methods: {
    build_trace(x, y, name, color, border, labs){
      console.log(x)
      var X = this.data_licenses[x]
      var Y = this.data_licenses[y]
      var trace = {
        type: "bar",
        x: X.map(function(a){return labs[a]}),
        y: Y,
        name: name,
        customdata:Y.map((c)=>{return c=c/Y.reduce((a, b) => a + b)*100}),
        hovertemplate:"%{x} <br> %{y:,d} instances <br> %{customdata:.1f}% of OpenSource <extra></extra>",
        marker: {
          color: color,
          opacity: .9,
          line: {
            color: border,
            width: 1
          }
        }
      }
      return trace

    }
  }

}
</script>


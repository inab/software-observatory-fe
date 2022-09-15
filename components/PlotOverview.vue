<template>
        <div id="plot"></div>
</template>

<style scoped>
#plot{
  padding: 0%;
  margin: 0%
}


#plot .modebar{
    display: none !important;
}
</style>

<script>
import Plotly from 'plotly.js-dist'
import { mapGetters } from 'vuex'

var layout_old = {title:false,
              showlegend: false,
              hoverlabel: { bgcolor: "#FFF" },
              margin: { l:0, t:0, b:0, r:0},
              font: {size: 9},
              width: 500,
              height: 300,
              yaxis: {
                title: {
                  text: 'count',
                  standoff: 8,
                  font: {
                    size: 8
                  }},
              tickformat: 'd',
              automargin: true
              },
              xaxis : {
                title: {
                  text: 'year',
                  standoff: 5,
                  font: {
                    size: 8
                  }
                },
                tickangle: 30,
                tickformat: 'd',
                automargin: true
                }};

export default {
  data() {
    return {
      labels : [],
      features_names: ['name', 'description', 'version', 'type', 'links', 'publication', 'download',
                        'inst_instr', 'test', 'src', 'os', 'input', 'output', 'dependencies', 'documentation',
                        'license', 'authors', 'repository','citations','bioschemas','ssl','operational'],
      feat_labels : {
              'name':'Name', 
              'description':'Description', 
              'version':'Version', 
              'type':'Type', 
              'links':'Links', 
              'publication':'Publication', 
              'download':'Download',
              'inst_instr':'Installation instructions', 
              'test':'Test', 
              'src':'Source code', 
              'os':'Operating system', 
              'input':'Input format', 
              'output':'Output format', 
              'dependencies':'Dependencies', 
              'documentation':'Documentation',
              'license':'License', 
              'authors':'Authors', 
              'repository':'Repository',
              'citations':'Historical number of citations',
              'bioschemas':'Bioschemas',
              'ssl':'SSL',
              'operational':'Historical homepage accessibility'
          },
      fps: {"sources": [
              "Bioconda" ,
              "Bioconductor", 
              "bio.tools", 
              "Galaxy Toolshed",
              "Galaxy Europe", 
              "SourceForge", 
              "Bitbucket", 
              "Github", 
              "OpenEBench"
              ],
            "data":{
              "Name" : [1,1,1,1,1,1,1,1,0],
              "Description": [2,2,2,2,2,2,2,2,0],
              "Version": [3,3,3,3,3,3,3,3,0],
              "Type": [4,4,4,4,4,0,0,0,0],
              "Links": [5,5,5,5,5,5,5,5,0],
              "Publication":[6,6,6,6,6,0,0,0,0],
              "Download":[7,7,7,7,0,7,7,7,0],
              "Installation instructions": [8,8,8,8,0,8,8,8,0],
              "Test": [0,0,0,9,0,0,0,0,0],
              "Source code":[10,10,10,10,0,10,10,10,0],
              "Operating system":[0,11,11,11,11,11,0,0,0],
              "Input format":[0,0,12,12,0,0,0,0,0],
              "Output format":[0,0,13,13,0,0,0,0,0],
              "Dependencies":[0,14,0,14,0,0,0,0,0],
              "Documentation":[0,15,15,15,0,0,15,15,0],
              "License": [16,16,16,16,16,0,16,16,0],
              "Authors":[0,17,17,17,0,0,17,17,0],
              "Repository":[18,18,18,18,18,18,18,18,0],
              "Historical number of citations":[0,0,0,0,0,0,0,0,19],
              "Bioschemas":[0,0,0,0,0,0,0,0,20],
              "SSL":[0,0,0,0,0,0,0,0,21],
              "Historical homepage accessibility":[0,0,0,0,0,0,0,0,22]
              }
            },
      colors: ['#7DC370', 
              '#7DC370', 
              '#7DC370', 
              '#7DC370', 
              '#7DC370',
              '#7DC370', 
              '#ff6641', 
              '#ff6641', 
              '#5a81a6'],
      colors_l: ['#4D9243',
                '#4D9243',
                '#4D9243',
                '#4D9243',
                '#4D9243',
                '#4D9243',
                '#B7482D',
                '#B7482D',
                '#0A589F']
      }
  },
  computed: {
    ...mapGetters( 'data',  {
      features : 'Features'
    })
  },
  mounted() {
    var scatter_data = {
      'source' : this.fps['sources'],
      'values' : this.features_names.map(this.map_feat_names)
      }
    
    var data = this.build_scatter_traces(scatter_data)

    var bars_data = this.bar_plot_data_restruct(this.features)
    var bars_plot = {
      x: bars_data.map( function(item){
        return item[0]
      }),
      y: bars_data.map( function(item){
        return item[1]
      }),
      xaxis: 'x1',
      yaxis: 'y1',
      type: 'bar',
      marker: {
        color:'#0A3364',
        opacity: .8
        },
        hovertemplate: '%{x} <extra></extra>'
      }

    data.push(bars_plot)

    var config = {
      responsive: true,
      displayModeBar: false}
    var layout = {
      grid: {
        rows: 2,
        columns: 1,
        roworder:'bottom to top'
      },
      xaxis: {
        title:'Feature', 
        tickangle:-45,
        automargin: true
      },
      yaxis: {
        title:'Number of instances',
        automargin: true
      },
      yaxis2: {
        automargin: true
      },
      xaxis2: {
        showticklabels: false, 
        range: [0.5, 22.5],
        automargin: true
      },
      autosize: true,
      margin: {
        autoexpand: true,
        t:0,
        r:20,
        l:0
      },
      height: 550,
      showlegend: false,
      font_size:12,
      font_color : 'black',
      font_family:"Balto, sans-serif",
      bargap: 0.1,
      bargroupgap: 0.0,
      hovermode:'y unified',
      hoverdistance: 1
    }

    Plotly.newPlot('plot', /* JSON object */ {
      "data": data,
      "layout": layout,
      "config": config
      })
  },
  methods: {
    map_feat_names(lab){
      return (this.fps.data[this.feat_labels[lab]])
    },
    build_scatter_traces(scatter_data){
      var scatter_plot = []
      for(let index = 0; index < scatter_data['values'].length; ++index){
        var arr = scatter_data['values'][index]
        var new_x = []
        var new_y = []
        var new_col_l = []
        var new_col = []
        var labels = []
        for(let i = 0; i < arr.length; ++i){
          if(arr[i] != 0){
            new_x.push(arr[i])
            new_y.push(scatter_data['source'][i])
            new_col.push(this.colors[i])
            new_col_l.push(this.colors_l[i])
            labels.push(this.feat_labels[this.features_names[index]])
          }
        }
        var trace = {
          x: new_x,
          y: new_y,
          xaxis: 'x2',
          yaxis: 'y2',
          type: 'scatter',
          mode: 'markers',
          marker: { size: 8, 
                color: new_col,
                line: {width:2,
                        color:new_col_l}
                },
          hovertemplate: '%{text} <extra></extra>',
          text: labels
        }
        scatter_plot.push(trace)
        }
      
      return scatter_plot     
      },
    bar_plot_data_restruct(features){
      var new_values = []
      for (var [key, value] of Object.entries(features)) {
        new_values.push([key, value])
      }
      return new_values 
    },
    fill_scatter_labels(values, index){
      var labels = values.map(x => (x != 0 ?  this.feat_labels[this.features_names[index]] : 0))
      return labels

    }
    }
  }
         
</script>

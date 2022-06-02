<template>
    <v-card 
    outlined
    elevation="2"
    class="pb-8 pr-4 pl-4">
        <h3 class="text-subtitle mb-4 mt-6 text-center">Versioning</h3>
            <p class="text--secondary mb-6 text-center card-content">
                Following a specific set of rules for naming software releases allows its inequivocal identification, 
                which increases its <span class="highlight">Findability</span>, <span class="highlight">Reusability</span> and guarantees the 
                <span class="highlight">Reproducibility</span> of research results.
            </p>
        <div  id="plot_3"></div>
         <v-alert
            elevation="0"
            icon="mdi-book-open-variant"
            border="left"
            dense
            color="#0b579f"
            colored-border
            height="38"
            class="mt-8 ml-4 mr-4"
            >
            <span class="alert-text"> Specification of Semantic Versioning <a href="https://github.com/semver/semver">here</a></span>
        </v-alert>

    </v-card>
</template>
<style scoped>
#plot {
  padding: 0%;
  margin: 0%;
}

#plot .modebar {
  display: none !important;
}

.card-content{
    font-size: .9em !important;
    width: 92%;
    margin: auto;
}

</style>
<script>
import Plotly from '../assets/plotly-2.12.1.min.js'

export default {
    data() {
        return {
            data_versioning:{
                "labels": ["Semantic Versioning", "Other", "None"], 
                "values": [20562, 943, 22482]
            },
            layout: {
                showlegend: true,
                hoverlabel: { bgcolor: "#FFF" },
                height: 220,
                autosize: true,
                margin: {
                    t:20,
                    l:0,
                    r:0,
                    b:20
                }
            },
            config: {
                responsive: true,
                displayModeBar: false}
            }
    },
    mounted() {

        var trace = {
            labels: this.data_versioning['labels'],
            values: this.data_versioning['values'],
            type:'pie',
            hole: 0.4,
            direction: 'clockwise',
            sort: false,
            marker: {
                colors:  ['#15264a', '#3a5ba1', '#bdc6d9'],
            },
            hovertemplate: '<b>%{label}</b><br>%{value:,d} instances<br>%{percent:.0%} of all instances<extra></extra>'
        }

        Plotly.newPlot('plot_3', /* JSON object */ {
            "data": [trace],
            "layout": this.layout,
            "config": this.config
            })
    }
}
</script>

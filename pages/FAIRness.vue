<template>
  <v-row 
    justify="center"
    >
        <v-col
        md="11"
        sm="11"
        cols="11"
        lg="11"
        xl="11">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="Findability"></card-title>
            <tabs-plot-info
            class="pr-3"
            plotComponent="BubbleChart"
            infoComponent="FTable"
            :properties="FProps"
            caption="">
            </tabs-plot-info>
        </v-card>
        </v-col>

        <v-col
        md="11"
        sm="11"
        cols="11"
        lg="11"
        xl="11">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="Accessibility"></card-title>
            <tabs-plot-info
                class="pr-3"
                plotComponent="BubbleChart"
                infoComponent="ATable"
                :properties="AProps"
                caption="">
            </tabs-plot-info>
        </v-card>
        </v-col>

        <v-col
        md="11"
        sm="11"
        cols="11"
        lg="11"
        xl="11">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="Interoperability"></card-title>
            <tabs-plot-info
                class="pr-3"
                plotComponent="BubbleChart"
                infoComponent="ITable"
                :properties="IProps"
                caption="">
            </tabs-plot-info>
        </v-card>
        </v-col>
        <v-col
        md="11"
        sm="11"
        cols="11"
        lg="11"
        xl="11">
        <v-card
        outlined
        elevation="1"
        class="pt-4 pl-6 pb-4">
        <card-title text="(Re)Usability"></card-title>
            <tabs-plot-info
                class="pr-3"
                plotComponent="BubbleChart"
                infoComponent="RTable"
                :properties="RProps"
                caption="">
            </tabs-plot-info>
        </v-card>
        </v-col>
</v-row>
</template>
<script>

export default{
    data(){
        return{
            fair_scores : {
                'F':[ 
                        {
                        'indicator': 'F3',
                        'scores': [0.0, 0.7, 0.85, 1.0],
                        'count' : [4684, 8985, 18606, 11712],
                        'percent' : [0.1, 0.2, 0.41, 0.29]
                        },
                        {
                        'indicator': 'F2',
                        'scores': [0.0, 0.6, 1.0],
                        'count' : [3275, 13057, 27655],
                        'percent' : [0.07, 0.29, 0.64]
                        },
                        {
                        'indicator': 'F1',
                        'scores': [0.8, 1.0],
                        'count' : [25397, 18590],
                        'percent' : [0.58, 0.42]
                        }
                    ],
                'A': [
                        {
                        'indicator': 'A1',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }, 
                        {
                        'indicator': 'A2',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }, 
                        {
                        'indicator': 'A3',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }
                    ],
                'I': [
                        {
                        'indicator': 'I1',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }, 
                        {
                        'indicator': 'I2',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }, 
                        {
                        'indicator': 'I3',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }
                    ],
                'R': [
                        {
                        'indicator': 'R1',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }, 
                        {
                        'indicator': 'R2',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }, 
                        {
                        'indicator': 'R3',
                        'scores': [0.0, 0.5, 1.0],
                        'count' : [0, 0, 0],
                        'percent' : [0.0, 0.0, 0.0]
                        }
                    ]
            },

            labels: {
                'F':  {
                    'F3':'F3.<br> Searchability',
                    'F2':'F2.<br> Existence <br> of Metadata',
                    'F1':'F1.<br> Identity <br> uniqueness'
                },
                'A':{'A1':'A1.<br> Accessibility <br> of Metadata',
                    'A2':'A2.<br> Accessibility <br> of Data',
                    'A3':'A3.<br> Accessibility <br> of Software'
                },
                'I':{'I1':'I1.<br> Interoperability <br> of Metadata',
                    'I2':'I2.<br> Interoperability <br> of Data',
                    'I3':'I3.<br> Interoperability <br> of Software'
                },
                'R':{'R1':'R1.<br> Reusability <br> of Metadata',
                    'R2':'R2.<br> Reusability <br> of Data',
                    'R3':'R3.<br> Reusability <br> of Software'
                }
            },
        }
    },
  created() {
    this.$store.dispatch('data/getFAIRscores')
    },
    computed: {
        FProps() {
            return {
                'fair_scores': this.fair_scores['F'],
                'labels': this.labels['F'],
                'id':'F'
            }
        },
        AProps() {
            return {
                'fair_scores': this.fair_scores['A'],
                'labels': this.labels['A'],
                'id':'A'
            }
        },
        IProps() {
            return {
                'fair_scores': this.fair_scores['I'],
                'labels': this.labels['I'],
                'id':'I'
            }
        },
        RProps() {
            return {
                'fair_scores': this.fair_scores['R'],
                'labels': this.labels['R'],
                'id':'R'
            }
        },
    },
  }

</script>


<template>
<v-container fluid>
    <v-row align="top">  
        <v-col 
        lg="6"
        md="6"
        sm="10"
        xs="10"
        >
        <v-row>
            <h1 class="text-h4 mt-13 mb-5">Software Observatory</h1>
        </v-row>
        <v-row>
            <p class="intro-text text--secondary">
            The tools observatory aims to monitor the technical quality of research software in the Life Sciences. 
            This is achieved through a comprehensive collection of metadata from different sources, which along 
            with additional computational means, allows the automatic generation of metrics.
            </p>
            <p class="intro-text text--secondary">
            This is achieved through a comprehensive collection of metadata from different sources, which along 
            with additional computational means, allows the automatic generation of metrics.
            </p>
        </v-row>
            
        </v-col>

        <v-col  
        lg="6"
        md="6"
        class="hidden-sm-and-down"
        align-self="center"
        >
            <v-img
                :src="require(`@/static/observatory_illustration_5.svg`)"
                width="450"
                class="illustration ml-auto"
            ></v-img>
        </v-col>
    </v-row>
</v-container>
</template>
<style scoped>

.intro-text{
    font-family: Roboto, sans-serif;
    font-size: .9em !important;
    font-weight: 400;
}

.illustration{
    margin-top:3em;
}
</style>
<script>
export default {
    data(){
        return {
            illustration: require('@/static/observatory_illustration_5.svg'),
        }   
    },
}
</script>
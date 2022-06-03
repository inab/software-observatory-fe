<template>
<v-container>
    <v-row align="top" justify="space-around">  
        <v-col
        xl="5" 
        lg="5"
        md="6"
        sm="10"
        xs="10"
        >
        <v-row>
            <h1 class="text-h4 mt-13 mb-5">Software Observatory</h1>
        </v-row>
        <v-row>
            <p class="intro-text text--secondary">
                The Software Observatory aims to be an instrument for the systematic observation and 
                diagnosis of the quality of research  software in the Life Sciences. 
                <br>
                The ultimate goal is to promote the adoption of software development best practices 
                in the Life Sciences, to which the Software Observatory can contribute through the 
                identification of trends in the way research software is being developed. Indeed these trends 
                can help detect needs and strategies to adopt at the individual and community levels.

            </p>

        </v-row>
            
        </v-col>

        <v-col  
        xl="7"
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
    font-size: .85em !important;
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
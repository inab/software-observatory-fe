<template>
    <v-row>  
        <v-col 
        lg="4"
        md="4"
        sm="10"
        xs="10"
        >
        <h1 style="color:#0b579f">Software Observatory</h1>
            <p class="intro-text">
            The tools observatory aims to monitor the technical quality of research software in the Life Sciences. 
            This is achieved through a comprehensive collection of metadata from different sources, which along 
            with additional computational means, allows the automatic generation of metrics.
            </p>
        </v-col>
        <v-col
        lg="1"
        md="1"
        class="hidden-sm-and-down"
        >
            
        </v-col>
        <v-col  
        lg="6"
        md="6"
        class="hidden-sm-and-down">
            <v-img
                :src="require(`@/static/observatory_illustration.svg`)"
                width="800"
            ></v-img>
        </v-col>
    </v-row>
</template>
<style scoped>

.intro-text{
    font-family: Roboto, sans-serif;
    font-size: 1em !important;
    font-weight: 400;
    margin-top:1em;
    margin-right: 1em;
}
</style>
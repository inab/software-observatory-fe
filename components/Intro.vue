<template>
    <v-row>  
        <v-col 
        cols="4" 
        >
        <h1>Software Observatory</h1>
            <p style="margin-top:1em">
            The tools observatory aims to monitor the technical quality of research software in the Life Sciences. 
            This is achieved through a comprehensive collection of metadata from different sources, which along 
            with additional computational means, allows the automatic generation of metrics.
            </p>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
            <v-img
                :src="require(`@/static/ETL.png`)"
                width="800"
            ></v-img>
        </v-col>
    </v-row>
</template>

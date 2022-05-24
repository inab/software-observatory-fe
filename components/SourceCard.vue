<template>
    <v-card 
        light
        rounded
        class="pa-2"      
        elevation="2">
        <v-row 
            dense
            align="center"
            >
            <v-col cols="4" >
                <div class="icon-cont">
                <v-img
                    :src="require(`@/static/${label}-logo-black.svg`)"
                ></v-img>
                </div>
            </v-col>
            <v-col 
                id="counts-text">
                <span><h3>{{title}}</h3></span>
                <span><h2>{{count}}</h2></span>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props:  ["title", "count", "label"]
}
</script>
<style scoped>
#counts-text{
    text-align: right !important;
}

.icon-cont{
    margin: auto;
    padding: auto;
    width: 100%;
    max-width: 3.5em;
}

.v-card{
    height: 5rem;
    min-height: 5rem;
    width: 100%;
    min-width:10em;
    display: inline-block;
    position: relative;
}

.v-card h3{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    line-height: normal;
    margin: 0.2rem;
}

.v-card h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: normal;
    margin: 0.3rem;
}
</style>

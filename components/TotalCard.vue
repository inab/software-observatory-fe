<template>
    <v-row
    justify="space-around"
    class="main-row">
    <v-col>
        <v-card 
        dark
        rounded    
        elevation="2">
        <v-row 
            align="center"
            style="height: 100%"
            >
            <v-col>
                <div id="counts-text">
                    <span><h3>Total</h3></span>
                    <span><h2>{{ Number(count).toLocaleString() }}</h2></span>
                </div>
            </v-col>
        </v-row>
        </v-card>
    </v-col> 
        </v-row>
</template>

<script>
export default {
    props : ['count']
}
</script>

<style scoped>
#counts-text{
    text-align: center !important;
    vertical-align: middle !important;
    height: 100%;
}

.main-row{
    height: 8em;
    margin-top: 2em;
}


.v-card{
    height: 100%;
    min-height: 100%;
    width: 100%;
    min-width:10em;
    display: inline-block;
    position: relative;
}

.v-card h3{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: bold;
    margin: 0.2rem;
}

.v-card h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: bold;
    margin: 0.3rem;
}
</style>

<template>
  <v-app>
    <Nuxt class="nuxt"/>
  </v-app>
</template>
<style>
#app{
    background-color: white;
    width: 100%;
}

html, body, .container {
  margin: auto;

}

h1 {
    font-family: Roboto, sans-serif;
    font-size: 2.2rem !important;
    line-height: 4.5rem;
    font-weight: 400;
    color:#0b579f;
}

h2 {
    font-family: Roboto, sans-serif;
    font-size: 1.7rem !important;
    line-height: 4.5rem;
    font-weight: 500;
    color:#000000de;
}

p{
    font-family: Roboto, sans-serif;
    font-size: .8em !important;
    font-weight: 400;
}


</style>

<script>

export default {
  name: 'DefaultLayout'
}
</script>

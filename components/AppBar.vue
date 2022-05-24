<template>
<div>

    <!--span  class="banner"><H6>Software Observatory</H6></span-->

  <div light>
    <Menu />
    <v-container>
            <div >
              <h1 style="color:red">
                Hello
            </h1>
            <h2 style="color:red">Count: {{ counter }} </h2>
            <v-btn @click="llamarSumaDos">Sum</v-btn>
            </div>
        </v-container>
    </div>
   </div>
</template>
<style scoped>
v-app-bar{
    display: flex;
    flex-direction: column;
}

.v-tabs{
    padding-left: 4rem
}

.banner h6 {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.7rem;
    font-weight: 800;
    line-height: normal;
    color: white;
    text-transform: uppercase;
}

</style>
<script>
  export default {
    data: () => ({
      collapseOnScroll: true,
    }),
  }
</script>
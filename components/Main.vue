<template>
<v-container>
    <v-row class="intro">
      <Intro />
    </v-row>
    <v-row>
        <v-col
        cols="2"
        md="3"
        lg="2"
        sm="2"
        >
          <Menu />
        </v-col>
        <v-col
        cols="10"
        md="9"
        lg="10"
        sm="10">
            <Nuxt class="nuxt"/>
        </v-col>
        
    </v-row>
</v-container>
</template>

<style scoped>
.intro{
  width:100%;
  margin: 2em
}

.nuxt{
  height: 100%;
}

.nuxt-link{
  text-decoration-line: none;
}

</style>
<template>
<v-container>
    <v-row class="intro">
      <Intro />
    </v-row>
    <v-row>
        <v-col
        cols="2"
        md="2"
        lg="2"
        sm="4"
        >
          <Menu />
        </v-col>
        <v-col
        cols="10"
        md="10"
        lg="10"
        sm="8">
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

</style>
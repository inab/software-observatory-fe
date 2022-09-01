<template>
      <v-badge
      :value="hover"
      :content="text"
      right
      light
      color="grey lighten-1"
      transition="fade-transition"
      tile
      inline
    >
      <v-hover v-model="hover">
        <nuxt-link 
        id="link" 
        to="path" 
        >
        
        <v-icon
          v-if="!hover"
          color="grey lighten-1"
        >
          {{ icon }}
        </v-icon>
        <v-icon
          v-else
          color="#0b579f"
        >
          {{ icon }}
        </v-icon>
        </nuxt-link>
      </v-hover>
    </v-badge>
</template>
<script>
  export default {
    props: ['text', 'path', 'icon'],
    data: () => ({
      hover: false,
    }),
  }
</script>
<style scoped>

#link{
    text-decoration-line: none !important;
}

#link .v-active{
  background-color: red;
}


</style>
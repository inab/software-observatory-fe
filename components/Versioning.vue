<template>
    <v-card 
    outlined
    elevation="2"
    class="pb-8 pr-4 pl-4">
        <h3 class="text-subtitle mb-4 mt-6 text-center">Versioning</h3>
        <p class="text--secondary mb-6 text-center card-content">
            Following a specific set of rules for naming software releases allows its inequivocal identification, 
            which increases its <span class="highlight">Findability</span>, <span class="highlight">Reusability</span> and guarantees the 
            <span class="highlight">Reproducibility</span> of research results.
        </p>
        <v-skeleton-loader
            v-if="$store.state.trends._unLoaded.semanticVersioning"
            class="mb-5 ml-10 mr-10"
            type="card-avatar"
            />
            <VersioningPlot v-else/>
         <v-alert
            elevation="0"
            icon="mdi-book-open-variant"
            border="left"
            dense
            color="#0b579f"
            colored-border
            height="38"
            class="mt-8 ml-4 mr-4"
            >
            <span class="alert-text"> Specification of Semantic Versioning <a href="https://github.com/semver/semver">here</a></span>
        </v-alert>

    </v-card>
</template>
<style scoped>
#plot {
  padding: 0%;
  margin: 0%;
}

#plot .modebar {
  display: none !important;
}

.card-content{
    font-size: .9em !important;
    width: 92%;
    margin: auto;
}

</style>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Versioning',
}
</script>

<template>
    <div>
        
        <v-row>
            <CollectionSelector />
        </v-row>
        <v-row 
        justify="center">
            <v-col
            md="12"
            sm="12"
            xs="12"
            lg="12"
            xl="12">
                <Licenses />
            </v-col>
        </v-row>
        <v-row
        justify="center">
            <v-col 
            md="6"
            sm="12"
            xs="12"
            lg="6"
            xl="6">
                <Versioning />
            </v-col>
            <v-col 
            md="6"
            sm="12"
            xs="12"
            lg="6"
            xl="6">
                <VersionControl />
            </v-col>
        </v-row>
    </div>
</template>
<script>
import CollectionSelector from '~/components/CollectionSelector.vue';
export default {
    name: "Trends",
    created() {
        this.$store.dispatch("trends/getLicensesSunburst");
        this.$store.dispatch("trends/getLicensesOpenSource");
        this.$store.dispatch("trends/getSemanticVersioning");
        this.$store.dispatch("trends/getVersionControlCount");
        this.$store.dispatch("trends/getVersionControlRepositories");
    },
    components: { CollectionSelector }
}
</script>

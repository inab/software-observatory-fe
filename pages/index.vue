<template>
    <div>
        <v-row>
            <h2>
                Trends
            </h2>
        </v-row>
        <v-row>
            <v-col>
                <Licenses />
            </v-col>
        </v-row>
        <v-row>
            <v-col 
            cols="6"
            md="6"
            sm="12"
            lg="6">
                <Versioning />
            </v-col>
            <v-col 
            cols="6"
            md="6"
            sm="12"
            lg="6">
                <VersionControl />
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['getCounter']
        }
    },
    methods: {
        llamarSumaDos() {
            this.$store.dispatch('sumarDos')
        }
    }
}
</script>

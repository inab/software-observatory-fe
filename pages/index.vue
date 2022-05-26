<template>
    <div>
        <v-row>
            <v-col cols="12">
            <h1>Trends</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <Licenses />
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

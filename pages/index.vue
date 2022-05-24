<template>
    <div>
        <h1>Trends</h1>
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

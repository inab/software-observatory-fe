<template>
    <h1>H</h1>
</template>
<script>
export default {
    computed: {
        cards() {
            return this.$store.getters['cards/getCards']
        }
    }
}
</script>
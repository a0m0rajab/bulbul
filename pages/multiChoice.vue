<template>
<v-container>
    <v-row>
        <multipleChoise />
    </v-row>
</v-container>
</template>

<script>
export default {
    components: {
        multipleChoise: () => import(`~/components/multipleChoise.vue`),
    },
}
</script>

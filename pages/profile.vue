<template>
<v-container>
    <v-row>
        <v-col cols="8">
            <v-row cols="12">
                <textCard class="mb-2 col-12" />
            </v-row>
            <v-row>
                <statsCard class="mb-2 col-12" />
            </v-row>
            <v-row>
                <consistencyCard class="mb-2 col-12" />
            </v-row>
        </v-col>
        <v-col cols="4">
            <profileCard />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    components: {
        profileCard: () => import('~/components/profileCard.vue'),
        statsCard: () => import('~/components/statsCard.vue'),
        textCard: () => import('~/components/textCard.vue'),
        consistencyCard: () => import('~/components/consistencyCard.vue'),
    },
}
</script>

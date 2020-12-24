<template>
<v-container>
    <v-col>
        <v-row>
            <info />
        </v-row>
        <v-row>
            <featuresList :title="impact.title" :icon="impact.icon" :list="impact.list" class="col-12" />
        </v-row>
        <v-row>
            <featuresList :title="impact.title" :icon="impact.icon" :list="impact.list" class="col-12" />
        </v-row>
        <v-row>
            <featuresList :title="impact.title" :icon="impact.icon" :list="impact.list" class="col-12" />
        </v-row>
    </v-col>
</v-container>
</template>

<script>
export default {
    components: {
        info: () => import(`~/components/info.vue`),
        featuresList: () => import(`~/components/featuresList.vue`),
    },
    data: () => ({
        impact: {
            icon: 'mdi-atom',
            title: 'التأثير',
            list: [{
                    icon: 'mdi-account-group-outline',
                    title: 'أعلم أشياء لا',
                    descr: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
                },
                {
                    icon: 'mdi-map-check-outline',
                    title: 'أعلم أشياء لا',
                    descr: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
                },
                {
                    icon: 'mdi-flash-circle',
                    title: 'أعلم أشياء لا',
                    descr: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
                },
                {
                    icon: 'mdi-github',
                    title: 'أعلم أشياء لا',
                    descr: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
                },
                {
                    icon: 'mdi-charity',
                    title: 'أعلم أشياء لا',
                    descr: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
                },
            ],
        },
    }),
}
</script>

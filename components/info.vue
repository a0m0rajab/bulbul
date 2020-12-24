<template>
<v-card width="100%">
    <v-card-text>
        <v-row align="center">
            <v-col md="4">
                <v-img src="undraw.svg" aspect-ratio="1.7" contain></v-img>
            </v-col>
            <v-col class="text-right">
                <h1 style="color: white !important">
                    هذا النص هو مثال لنص يمكن أن ي
                </h1>
                <br />
                <h2>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                    النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
                    من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                </h2>
                <br />
            </v-col>
        </v-row>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    data: () => {
        return {
            search: '',
        }
    },
}
</script>

<template>
<v-card class="mx-auto rounded-xl text-right">
    <v-card-text>
        <p class="display-1 text--primary">الإحصائيات</p>
        <div class="text--primary">
            <v-row>
                <v-col>
                    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                </v-col>
                <v-col>
                    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                </v-col>
                <v-col>
                    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                </v-col>
            </v-row>
        </div>
    </v-card-text>
    <v-card-actions>
        <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    data: () => {
        return {
            series: [44, 55],
            chartOptions: {
                legend: {
                    show: false,
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                }, ],
            },
        }
    },
}
</script>

<template>
<v-card class="mx-auto rounded-xl text-right">
    <v-card-text>
        <p class="display-1 text--primary">الاستمرارية</p>
        <div class="text--primary">
            <apexchart type="heatmap" :options="chartOptions" :series="series"></apexchart>
        </div>
    </v-card-text>
    <v-card-actions>
        <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    data: function () {
        return {
            series: [{
                    name: 'Metric1',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric2',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric3',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric4',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric5',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric6',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric7',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric8',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
                {
                    name: 'Metric9',
                    data: this.generateData(18, {
                        min: 0,
                        max: 90,
                    }),
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'heatmap',
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ['#008FFB'],
                title: {},
            },
        }
    },

    methods: {
        generateData(count, yrange) {
            var i = 0
            var series = []
            while (i < count) {
                var x = (i + 1).toString()
                var y =
                    Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
                series.push({
                    x: x,
                    y: y,
                })
                i++
            }
            return series
        },
    },
}
</script>

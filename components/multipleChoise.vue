<template>
<v-container>
    <v-row>
        <v-card elevation="2" outlined shaped class="rounded-xl">
            <v-card-text class="d-flex justify-center text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                dignissimos quidem eius nesciunt earum explicabo iusto magni pariatur
                sunt non ea, quas autem alias vero aperiam suscipit obcaecati quasi
                ratione?
            </v-card-text>
        </v-card>
    </v-row>
    <v-row>
        <v-col v-for="i in 4" :key="i">
            <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card @click="buttonClicked(i)" outlined shaped :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" style="cursor: pointer" class="rounded-xl">
                    <v-card-text class="d-flex justify-center"> {{ i}}</v-card-text>
                    <img src="~/assets/animals/panda.png" />
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
    <v-row >
        <v-card v-if="innerText" outlined shaped class="rounded-xl">
               <v-card-text class="d-flex justify-center text-center">
                The button is clicked {{innerText}}
            </v-card-text>
        </v-card>
    </v-row>
</v-container>
</template>

<script>
export default {
    data:function (){return {innerText:0,}}, 
    methods:{
        buttonClicked(event){
            if(!this.innerText)
                this.innerText= event
        }
    }
}
</script>

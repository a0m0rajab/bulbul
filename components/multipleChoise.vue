<template>
  <v-container>
    <v-row>
      <v-card elevation="2" outlined shaped class="rounded-xl ma-2">
        <v-card-text class="d-flex justify-center text-center">
          {{ questionText }}
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in options" :key="i">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card
            @click="buttonClicked(item.answer)"
            outlined
            :color="item.answer && selected ? `green` : null"
            shaped
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            style="cursor: pointer"
            class="rounded-xl d-flex justify-center"
          >
            <v-card-text class="d-flex justify-center">
              {{ item.text }}</v-card-text
            >
            <img src="~/assets/animals/panda.png" />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        @click="nextQuestion"
        v-if="selected"
        outlined
        shaped
        class="rounded-xl"
      >
        <v-card-text class="d-flex justify-center text-center">
          The button is clicked {{ correct }}
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return { selected: 0, correct: false }
  },
  methods: {
    nextQuestion() {
      if (this.$store.state.question.questionNo < 3) {
        this.$store.commit('question/nextQuestion')
        this.correct = false
        this.selected = false
      }
    },
    buttonClicked(event) {
      if (!this.selected) {
        this.correct = !!event
        this.selected = true
      }
    },
  },
  props: {
    questionText: String,
    options: Array,
  },
}
</script>

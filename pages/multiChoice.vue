<template>
  <v-container>
      <v-row>
          Question {{questionIndex + 1}} of {{this.questionList.length}}
      </v-row>
    <v-row>
      <multipleChoise :questionText="questionList[questionIndex].question" :options="questionList[questionIndex].options" />
    </v-row>
  </v-container>
</template>

<script>
export default {
    computed: {
    questionIndex () {
      return this.$store.state.question.questionNo
    }
  },
  data: function () {
    return {
        questionList:[ 
            {question:
        "1 ipsum dolor sit amet consectetur adipisicing elit. Beatae, consectetur. Voluptatibus id iure vel, molestiae recusandae facere ipsa voluptate dolore incidunt facilis doloribus dignissimos velit dolor architecto assumenda quae tenetur.",
      options: [
        { text: "Hello", },
        { text: "world" },
        { text: "from" ,answer: true },
        { text: "confused" },
      ],},   {question:
        "2 ipsum dolor sit amet consectetur adipisicing elit. Beatae, consectetur. Voluptatibus id iure vel, molestiae recusandae facere ipsa voluptate dolore incidunt facilis doloribus dignissimos velit dolor architecto assumenda quae tenetur.",
      options: [
        { text: "Hello", answer: true },
        { text: "world" },
        { text: "from" },
        { text: "confused" },
      ],},   {question:
        "3 ipsum dolor sit amet consectetur adipisicing elit. Beatae, consectetur. Voluptatibus id iure vel, molestiae recusandae facere ipsa voluptate dolore incidunt facilis doloribus dignissimos velit dolor architecto assumenda quae tenetur.",
      options: [
        { text: "Hello", answer: true },
        { text: "world" },
        { text: "from" },
        { text: "confused" },
      ],},   {question:
        "4 ipsum dolor sit amet consectetur adipisicing elit. Beatae, consectetur. Voluptatibus id iure vel, molestiae recusandae facere ipsa voluptate dolore incidunt facilis doloribus dignissimos velit dolor architecto assumenda quae tenetur.",
      options: [
        { text: "Hello", answer: true },
        { text: "world" },
        { text: "from" },
        { text: "confused" },
      ],}
        ]
    };
  },
  components: {
    multipleChoise: () => import(`~/components/multipleChoise.vue`),
  },
};
</script>

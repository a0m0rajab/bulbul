<template>
  <v-row justify="center">
    <v-card elevation="2" outlined shaped class="ma-3 rounded-xl">
      <v-form v-model="valid" class="ma-3">
        <v-jsf v-model="model" :schema="schema" />
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'wordEntry',
  data: () => ({
    valid: false,
    model: {},
    schema: {
      type: 'object',
      properties: {
        lang: {
          type: 'string',
          title: 'Choose language',
          enum: ['Arabic', 'English', 'Turkish'],
          'x-display': 'autocomplete',
        },
        word: { type: 'string' },
        picture: { type: 'string', 'x-display': 'file' },
      },
    },
  }),
}
</script>
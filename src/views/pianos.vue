<template>
  <div class="musician">
    <h1>List of Pianos</h1>
    <div v-for="piano in pianos" :key="piano">
      {{ piano }}
    </div>
    <input v-model="piano">
    <button @click="addPiano">Add Piano</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PianoList',
  computed: {
    ...mapState({
      pianos: 'pianos',
    }),
  },
  data() {
    return {
      piano: '',
    };
  },
  methods: {
    addPiano() {
      this.$store.dispatch('addPiano', this.piano);
      this.piano = '';
    },
  },
};
</script>

<style scoped lang="scss">

  button {
    padding: 10px;
    font-size: 20px;
    margin: 20px;
  }
</style>

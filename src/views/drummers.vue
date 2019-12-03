<template>
  <div class="musician">
    <h1>List of Drummers</h1>
    <div v-for="drummer in drummers" :key="drummer">
      {{ drummer }}
    </div>
    <input v-model="drummer">
    <button @click="addADrummer">Add A Drummer</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DrummersList',
  computed: {
    ...mapState({
      drummers: 'drummers',
    }),
  },
  data() {
    return {
      drummer: '',
    };
  },
  methods: {
    addADrummer() {
      this.$store.dispatch('addADrummer', this.drummer);
      this.drummer = '';
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

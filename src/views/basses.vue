<template>
  <div class="musician">
    <h1>List of Bassits</h1>
    <div v-for="bass in basses" :key="bass">
      {{ bass }}
    </div>
    <input v-model="bass">
    <button @click="addBass">Add Bass</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BassList',
  computed: {
    ...mapState({
      basses: 'basses',
    }),
  },
  data() {
    return {
      bass: '',
    };
  },
  methods: {
    addBass() {
      this.$store.dispatch('addBass', this.bass);
      this.bass = '';
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

<template>
  <div class="musician">
    <h1>List of Trumpet Players</h1>
    <div v-for="trumpet in trumpets" :key="trumpet">
      {{ trumpet }}
    </div>
    <input v-model="trumpet">
    <button @click="addTrumpet">Add Trumpet Player</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TrumpetList',
  computed: {
    ...mapState({
      trumpets: 'trumpets',
    }),
  },
  data() {
    return {
      trumpet: '',
    };
  },
  methods: {
    addTrumpet() {
      this.$store.dispatch('addTrumpet', this.trumpet);
      this.trumpet = '';
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

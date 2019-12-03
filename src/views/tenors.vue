<template>
  <div class="musician">
    <h1>List of Tenors</h1>
    <div v-for="tenor in tenors" :key="tenor">
      {{ tenor }}
    </div>
    <input v-model="tenor">
    <button @click="addTenor">Add Tenor</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TenorList',
  computed: {
    ...mapState({
      tenors: 'tenors',
    }),
  },
  data() {
    return {
      tenor: '',
    };
  },
  methods: {
    addTenor() {
      this.$store.dispatch('addTenor', this.tenor);
      this.tenor = '';
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

<template>
  <div class="guitars">
    <h1>List of Guitars</h1>
      <div v-for="guitar in guitars" :key="guitar">
        {{ guitar }}
      </div>
        <input v-model="guitar">
        <button @click="addGuitar">Add Guitar</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GuitarList',
  computed: {
    ...mapState({
      guitars: 'guuitars',
    }),
  },
  data() {
    return {
      guitar: '',
    };
  },
  methods: {
    addGuitar() {
      this.$store.dispatch('addGuitar', this.guitar);
      this.guitar = '';
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

<template>
  <div class="musician">
    <h1>List of Baris</h1>
    <div v-for="bari in baris" :key="bari">
      {{ bari }}
    </div>
    <input v-model="bari">
    <button @click="addBari">Add Bari</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BariList',
  computed: {
    ...mapState({
      baris: 'baris',
    }),
  },
  data() {
    return {
      bari: '',
    };
  },
  methods: {
    addBari() {
      this.$store.dispatch('addBari', this.bari);
      this.bari = '';
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

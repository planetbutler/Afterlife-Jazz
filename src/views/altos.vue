<template>
  <div class="altos">
    <h1>List of Altos</h1>
      <div v-for="alto in altos" :key="alto">
        {{ alto }}
      </div>
        <input v-model="alto">
        <button @click="addAlto">Add Alto</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AltoList',
  computed: {
    ...mapState({
      altos: 'altos',
    }),
  },
  data() {
    return {
      alto: '',
    };
  },
  methods: {
    addAlto() {
      this.$store.dispatch('addAlto', this.alto);
      this.alto = '';
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

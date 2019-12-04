<template>
  <div class="vocalists">
    <h1>List of Vocalists</h1>
      <div v-for="vocalist in vocalists" :key="vocalist">
        {{ vocalist }}
      </div>
        <input v-model="vocalist">
        <button @click="addVocalist">Add Vocalist</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VocalistList',
  computed: {
    ...mapState({
      vocalists: 'vocalists',
    }),
  },
  data() {
    return {
      vocalist: '',
    };
  },
  methods: {
    addVocalist() {
      this.$store.dispatch('addVocalist', this.vocalist);
      this.vocalist = '';
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

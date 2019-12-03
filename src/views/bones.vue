<template>
  <div class="musician">
    <h1>List of Bones</h1>
    <div v-for="bone in bones" :key="bone">
      {{ bone }}
    </div>
    <input v-model="bone">
    <button @click="addBone">Add Bone</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BoneList',
  computed: {
    ...mapState({
      bones: 'bones',
    }),
  },
  data() {
    return {
      bone: '',
    };
  },
  methods: {
    addBone() {
      this.$store.dispatch('addBone', this.bone);
      this.bone = '';
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

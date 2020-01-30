<template>
  <div class="maker">
    <h1>The Band: {{ id }}</h1>
    <div>Featuring -</div>
    <div v-show="band.trumpet.nickName">Cat: {{ band.trumpet.nickName }}</div>
    <div v-show="band.alto.nickName">Alto: {{ band.alto.nickName }}</div>
    <div v-show="band.tenor.length > 0">Tenor: {{ band.tenor }}</div>
    <div v-show="band.bari.length > 0">Bari: {{ band.bari }}</div>
    <div v-show="band.bone.length > 0">Bone: {{ band.bone }}</div>
    <div v-show="band.piano.length > 0">Piano: {{ band.piano }}</div>
    <div v-show="band.bass.length > 0">Bass: {{ band.bass }}</div>
    <div v-show="band.drummer.length > 0">Drummer: {{ band.drummer }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BookingTool',
  props: ['id'],
  computed: {
    ...mapState({
      gigsBooked: 'gigsBooked',
    }),
  },
  created() {
    this.band = this.gigsBooked.find(band => this.id === band.id);
  },
  data() {
    return {
      band: {},
    };
  },
};
</script>

<style scoped lang="scss">

  .fajita {
    margin: 50px;
  }

  .ingredients {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 50px;
  }

  button {
    padding: 30px;
    font-size: 20px;
    margin: 20px;
  }
</style>

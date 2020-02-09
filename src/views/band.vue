<template>
  <div class="maker">
    <h1>The Band: {{ id }}</h1>
    <div>Featuring -</div>
    <div v-show="band.trumpet1.nickName">Trumpet: {{ band.trumpet1.nickName }}</div>
    <div v-show="band.trumpet2.nickName">Trumpet: {{ band.trumpet2.nickName }}</div>
    <div v-show="band.trumpet3.nickName">Trumpet: {{ band.trumpet3.nickName }}</div>
    <div v-show="band.trumpet4.nickName">Trumpet: {{ band.trumpet4.nickName }}</div>
    <div v-show="band.trumpet5.nickName">Trumpet: {{ band.trumpet5.nickName }}</div>
    <div v-show="band.alto1.nickName">Alto: {{ band.alto1.nickName }}</div>
    <div v-show="band.alto2.nickName">Alto: {{ band.alto2.nickName }}</div>
    <div v-show="band.tenor1.nickName">Tenor: {{ band.tenor1.nickName }}</div>
    <div v-show="band.tenor2.nickName">Tenor: {{ band.tenor2.nickName }}</div>
    <div v-show="band.bari.nickName">Bari: {{ band.bari.nickName }}</div>
    <div v-show="band.bone1.nickName">Bone: {{ band.bone1.nickName }}</div>
    <div v-show="band.bone2.nickName">Bone: {{ band.bone2.nickName }}</div>
    <div v-show="band.bone3.nickName">Bone: {{ band.bone3.nickName }}</div>
    <div v-show="band.bone4.nickName">Bone: {{ band.bone4.nickName }}</div>
    <div v-show="band.bone5.nickName">Bone: {{ band.bone5.nickName }}</div>
    <div v-show="band.piano.nickName">Piano: {{ band.piano.nickName }}</div>
    <div v-show="band.bass.nickName">Bass: {{ band.bass.nickName }}</div>
    <div v-show="band.drummer.nickName">Drummer: {{ band.drummer.nickName }}</div>
    <div v-show="band.vocalist.nickName">Vocalist: {{ band.vocalist.nickName }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Band',
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
  button {
    padding: 30px;
    font-size: 20px;
    margin: 20px;
  }
  .maker {
    width: 400px;
    background-color: grey;
    opacity: .7;
    color: white;
    text-shadow: 2px 2px 4px #000000;
  }
</style>

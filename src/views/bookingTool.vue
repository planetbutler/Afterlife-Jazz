<template>
  <div class="maker">
    <h1>Booking Tool</h1>
    <h2>Select Your Date</h2>
      <input type="date"></input>
    <h2>Select Your Style</h2>
      <select v-model="style">
        <option v-for="style in styles" :key="style">{{ style }}</option>
      </select>
    <h2>Select Your Format</h2>
      <input type="radio" name="format" value="big band"> Big Band<br>
      <input type="radio" name="format" value="combo"> Combo<br>
    <h2>Select your Musicians</h2>
    <div class="ingredients">
      <div>
        <div class="title">Trumpets<br>(select up to 5)</div>
        <select v-model="trumpet" multiple="multiple">
          <option v-for="trumpet in trumpets" :key="trumpet">{{ trumpet }}</option>
        </select>
      </div>
      <div>
        <div class="title">Altos<br>(select up to 2)</div>
        <select v-model="alto" multiple="multiple">
          <option v-for="alto in altos" :key="alto">{{ alto }}</option>
        </select>
      </div>
      <div>
        <div class="title">Tenors<br>(select up to 2)</div>
        <select v-model="tenor" multiple="multiple">
          <option v-for="tenor in tenors" :key="tenor">{{ tenor }}</option>
        </select>
      </div>
      <div>
        <div class="title">Baris</div>
        <select v-model="bari">
          <option v-for="bari in baris" :key="bari">{{ bari }}</option>
        </select>
      </div>
      <div>
        <div class="title">Bones<br>(select up to 5)</div>
        <select v-model="bone" multiple="multiple">
          <option v-for="bone in bones" :key="bone">{{ bone }}</option>
        </select>
      </div>
      <div>
        <div class="title">Piano</div>
        <select v-model="piano">
          <option v-for="piano in pianos" :key="piano">{{ piano }}</option>
        </select>
      </div>
      <div>
        <div class="title">Bass</div>
        <select v-model="bass">
          <option v-for="bass in basses" :key="bass">{{ bass }}</option>
        </select>
      </div>
      <div>
        <div class="title">Drummer</div>
        <select v-model="drummer">
          <option v-for="drummer in drummers" :key="drummer">{{ drummer }}</option>
        </select>
      </div>
    </div>
    <h2>This date's current personnel are:</h2>
    <div class="fajita">
      <div v-show="trumpet.length > 0">{{ trumpet }}</div>
      <div v-show="alto.length > 0">{{ alto }}</div>
      <div v-show="tenor.length > 0">{{ tenor }}</div>
      <div v-show="bari.length > 0">{{ bari }}</div>
      <div v-show="bone.length > 0">{{ bone }}</div>
      <div v-show="piano.length > 0">{{ piano }}</div>
      <div v-show="bass.length > 0">{{ bass }}</div>
      <div v-show="drummer.length > 0">{{ drummer }}</div>
      <button @click="addBand">Book the Band!</button>
    </div>
    <div v-if="gigsBooked.length > 0" class="gigsBooked">
      <h2>Booking List</h2>
      <div v-for="band in gigsBooked" :key="band.id">
        {{ band.id }} - Tonight's Band Led by {{ band.trumpet }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BookingTool',
  props: [],
  components: {},
  computed: {
    ...mapState({
      trumpets: 'trumpets',
      altos: 'altos',
      tenors: 'tenors',
      baris: 'baris',
      bones: 'bones',
      pianos: 'piano',
      basses: 'basses',
      drummers: 'drummers',
      gigsBooked: 'gigsBooked',
      styles: 'styles',
      formats: 'formats',
    }),
  },
  data() {
    return {
      trumpet: '',
      alto: '',
      tenor: '',
      bari: '',
      bone: '',
      piano: '',
      bass: '',
      drummer: '',
    };
  },
  created() {
  },
  mounted() {
  },
  updated() {
  },
  destroyed() {
  },
  methods: {
    addBand() {
      const band = {
        id: 1 + this.gigsBooked.length,
        trumpet: this.trumpet,
        alto: this.alto,
        tenor: this.tenor,
        bari: this.bari,
        bone: this.bone,
        piano: this.piano,
        bass: this.bass,
        drummer: this.drummer,
      };
      this.$store.dispatch('addBand', band);
    },
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

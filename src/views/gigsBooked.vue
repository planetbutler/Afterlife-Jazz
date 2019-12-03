<template>
  <div class="maker">
    <h1>List of Booked Gigs</h1>
    <div v-for="band in gigsBooked" :key="band.id" class="band">
      <router-link :to="{ name: 'band', params: { id: band.id }}">
        <div>Gig ID: {{ band.id }} - {{ band.trumpet }}</div>
      </router-link>
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
      pianos: 'pianos',
      basses: 'basses',
      drummers: 'drummers',
      gigsBooked: 'gigsBooked',
    }),
  },
  methods: {
    viewBand() {
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

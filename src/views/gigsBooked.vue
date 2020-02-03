<template>
  <div class="maker">
    <h1>List of Booked Gigs</h1>
    <div v-for="band in gigsBooked" :key="band.id" class="band">
      <router-link :to="{ name: 'band', params: { id: band.id }}">
        <div class="band">Gig ID: {{ band.id }} - {{ band.trumpet.nickName }} {{ band.trumpet.last }}</div>
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
      musicians: 'musicians',
      gigsBooked: 'gigsBooked',
    }),
  },
  methods: {
    viewBand() {
      const band = {
        id: 1 + this.gigsBooked.length,
        cat: this.cat,
      };
      this.$store.dispatch('addBand', band);
    },
  },
};
</script>

<style scoped lang="scss">
button {
  padding: 30px;
  font-size: 20px;
  margin: 20px;
}
.band {
  background-color: grey;
  opacity: .7;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  width: 400px;
}
</style>

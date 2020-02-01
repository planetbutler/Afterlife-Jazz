<template>
  <div class="bookpage">
    <div class="eventcol">
      <div class="maker">
        <h2>Select Your Date</h2>
          <input type="date">
      </div>
      <div class="maker">
        <h2 class="venue">Select Your Venue</h2>
          <input type="radio" class="venue" name="venue" value="Savoy Ballroom">Savoy Ballroom North (Way North)<br>
          <input type="radio" class="venue" name="venue" value="Cotton Club">Cloud Club<br>
          <input type="radio" class="venue" name="venue" value="Bird Land">Bird of Paradise Land<br>
          <input type="radio" class="venue" name="venue" value="Village Vanguard">Village Vanguard<br>
      </div>
      <div class="maker">
        <h2>Select Your Style</h2>
          <input type="checkbox" name="style" value="Swing">Swing<br>
          <input type="checkbox" name="style" value="Bebop">Bebop<br>
          <input type="checkbox" name="style" value="Modal">Modal<br>
          <input type="checkbox" name="style" value="Jazz Rock">Jazz Rock<br>
          <input type="checkbox" name="style" value="Latin">Latin<br>
          <input type="checkbox" name="style" value="Dixieland">Dixieland<br>
      </div>
      <div class="maker">
        <h2>Select Your Format</h2>
        <input type="radio" name="format" value="big band">Big Band<br>
        <input type="radio" name="format" value="combo">Combo<br>
      </div> 
    </div>  
    <div class="musicianscol"> 
      <h2>Select your Musicians</h2>
      <div>
        <div>Lead Trumpet
          <select v-model="trumpet">
            <option v-for="(cat, index) in trumpetPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>    
      </div>
      <div>
        <div>Trumpet 2
          <select v-model="trumpet">
            <option v-for="(cat, index) in trumpetPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>    
      </div>
      <div>
        <div>Trumpet 3
          <select v-model="trumpet">
            <option v-for="(cat, index) in trumpetPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>    
      </div>
      <div>
        <div>Trumpet 4
          <select v-model="trumpet">
            <option v-for="(cat, index) in trumpetPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>  
      </div>
      <div>
        <div>Trumpet 5 (jazz chair)
          <select v-model="trumpet">
            <option v-for="(cat, index) in trumpetPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>  
        </div>  
      </div>
      <div>
        <div>Alto 1
          <select v-model="alto"> 
            <option v-for="(cat, index) in altoPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>
      </div> 
      <div>
        <div>Alto 2
          <select v-model="alto"> 
            <option v-for="(cat, index) in altoPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>
      </div>    
      <div>
        <div>Tenor 1
          <select v-model="tenor"> 
            <option v-for="(cat, index) in tenorPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div> 
      </div>
      <div>
        <div>Tenor 2
          <select v-model="tenor"> 
            <option v-for="(cat, index) in tenorPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>  
      </div>
      <div>
        <div>Bari
          <select v-model="bari"> 
            <option v-for="(cat, index) in bariPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>  
      </div>
      <div>
        <div>Bones
          <select v-model="bone" :close-on-select="true"> 
            <option v-for="(cat, index) in bonePlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>  
      </div>
      <div>
        <div>Piano
          <select v-model="piano"> 
            <option v-for="(cat, index) in pianoPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>
      </div>
      <div>
        <div>Bass
          <select v-model="bass"> 
            <option v-for="(cat, index) in bassPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>
      </div>
      <div>
        <div>Drummer
        <select v-model="drummer"> 
            <option v-for="(cat, index) in drummerPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>
      </div>
      <div>
        <div>Guitar
          <select v-model="guitar"> 
            <option v-for="(cat, index) in guitarPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>
      </div>
      <div>
        <div>Vocalist
          <select v-model="vocalist"> 
            <option v-for="(cat, index) in vocalistPlayers" :value="cat" :key="index">{{ cat.nickName }} {{ cat.last }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="datecol">
      <h2 class="maker">This date's current personnel are:</h2>
      <div class="maker">
        <div v-show="trumpet.nickName">On Trumpet {{ trumpet.nickName }} {{ trumpet.last }}</div>
        <div v-show="alto.first">On Alto Sax {{ alto.nickName }} {{ alto.last }}</div>
        <div v-show="tenor.first">On Tenor Sax {{ tenor.nickName }} {{ tenor.last }}</div>
        <div v-show="bari.first">On Bari Sax {{ bari.nickName }} {{ bari.last }}</div>
        <div v-show="bone.first">On Trombone {{ bone.nickName }} {{ bone.last }}</div>
        <div v-show="piano.first">On Piano {{ piano.nickName }} {{ piano.last }}</div>
        <div v-show="bass.first">On Bass {{ bass.nickName }} {{ bass.last }}</div>
        <div v-show="drummer.first">On Drums {{ drummer.nickName }} {{ drummer.last }}</div>
        <div v-show="guitar.first">On Guitar {{ guitar.nickName }} {{ guitar.last }}</div>
        <div v-show="vocalist.first">On Vocals {{ vocalist.nickName }} {{ vocalist.last }}</div>
        <button @click="addBand">Book the Band!</button>
      </div>
      <div>  
        <div v-if="gigsBooked.length > 0" class="gigsBooked">
          <h2>Booking List</h2>
          <div v-for="band in gigsBooked" :key="band.id">
            {{ band.id }} - Tonight's Band Led by {{ band.trumpet.nickName }}
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { mapState } from 'vuex';

export default {
  name: 'BookingTool',
  props: [],
  components: { Multiselect },
  computed: {
    ...mapState({
      musicians: 'musicians',
      gigsBooked: 'gigsBooked',
      styles: 'styles',
      formats: 'formats',
    }),
  },
  data() {
    return {
      trumpet: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      alto: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      tenor: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bari: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bone: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      piano: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bass: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      drummer: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      guitar: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      vocalist: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      style: '',
      format: '',
      trumpetPlayers:[],
      altoPlayers:[],
      tenorPlayers:[],
      bariPlayers:[],
      bonePlayers:[],
      pianoPlayers:[],
      bassPlayers:[],
      drummerPlayers:[],
      guitarPlayers:[],
      vocalistPlayers:[],
    };
  },
  created() {
  this.trumpetPlayers=this.musicians.filter(item => item.axe==='trumpet');
  this.altoPlayers=this.musicians.filter(item => item.axe==='alto');
  this.tenorPlayers=this.musicians.filter(item => item.axe==='tenor');
  this.bariPlayers=this.musicians.filter(item => item.axe==='bari');
  this.bonePlayers=this.musicians.filter(item => item.axe==='bone');
  this.pianoPlayers=this.musicians.filter(item => item.axe==='piano');
  this.bassPlayers=this.musicians.filter(item => item.axe==='bass');
  this.drummerPlayers=this.musicians.filter(item => item.axe==='drummer');
  this.guitarPlayers=this.musicians.filter(item => item.axe==='guitar');
  this.vocalistPlayers=this.musicians.filter(item => item.axe==='vocalist');
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
        guitar: this.guitar,
        vocalist: this.vocalist,
      };
      this.$store.dispatch('addBand', band);
    },
    limitTrumpetSelection(e) {
      console.log(e);
    }
  },
};
</script>

<style scoped lang="scss">
.bookpage {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
.maker {
  width: 300px;
  background-color: grey;
  opacity: .7;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.musicianscol {
  margin: 20px 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: right;
  /*padding: 20px;*/
  background-color: grey;
  opacity: .7;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.select {
  width: 140px;
  text-shadow: 0px 0px 0px #000000;
}
button {
  padding: 30px;
  font-size: 20px;
  margin: 20px;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

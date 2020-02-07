<template>
  <div class="bookpage">
    <div class="form">
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
            <select v-model="trumpet1" @change="filterMusicians">
              <option v-for="(cat, index) in trumpet1Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>    
        </div>
        <div>
          <div>Trumpet 2
            <select v-model="trumpet2" @change="filterMusicians">
              <option v-for="(cat, index) in trumpet2Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>    
        </div>
        <div>
          <div>Trumpet 3
            <select v-model="trumpet3" @change="filterMusicians">
              <option v-for="(cat, index) in trumpet3Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>    
        </div>
        <div>
          <div>Trumpet 4
            <select v-model="trumpet4" @change="filterMusicians">
              <option v-for="(cat, index) in trumpet4Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>  
        </div>
        <div>
          <div>Trumpet 5 (jazz chair)
            <select v-model="trumpet5" @change="filterMusicians">
              <option v-for="(cat, index) in trumpet5Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>  
          </div>  
        </div>
        <div>
          <div>Alto 1
            <select v-model="alto1" @change="filterMusicians">
              <option :value="{first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null}" :key="0"></option>
              <option v-for="(cat, index) in alto1Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>
        </div> 
        <div>
          <div>Alto 2
            <select v-model="alto2" @change="filterMusicians">
              <option :value="{first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null}" :key="0"></option>
              <option v-for="(cat, index) in alto2Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>
        </div>    
        <div>
          <div>Tenor 1
            <select v-model="tenor1" @change="filterMusicians"> 
              <option v-for="(cat, index) in tenor1Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div> 
        </div>
        <div>
          <div>Tenor 2
            <select v-model="tenor2" @change="filterMusicians"> 
              <option v-for="(cat, index) in tenor2Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>  
        </div>
        <div>
          <div>Bari
            <select v-model="bari"> 
              <option v-for="(cat, index) in bariPlayers" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>  
        </div>
        <div>
          <div>Bone 1
            <select v-model="bone1" @change="filterMusicians"> 
              <option v-for="(cat, index) in bone1Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>  
        </div>
        <div>
          <div>Bone 2
            <select v-model="bone2" @change="filterMusicians"> 
              <option v-for="(cat, index) in bone2Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>  
        </div>
        <div>
          <div>Bone 3
            <select v-model="bone3" @change="filterMusicians"> 
              <option v-for="(cat, index) in bone3Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>  
        </div>
        <div>
          <div>Bone 4
            <select v-model="bone4" @change="filterMusicians"> 
              <option v-for="(cat, index) in bone4Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
            </select>
          </div>  
        </div>
        <div>
          <div>Bass Bone
            <select v-model="bone5" @change="filterMusicians"> 
              <option v-for="(cat, index) in bone5Players" :value="cat" :key="index+1">{{ cat.nickName }} {{ cat.last }}</option>
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
          <div v-show="trumpet1.nickName">On Trumpet {{ trumpet1.nickName }} {{ trumpet1.last }}</div>
          <div v-show="trumpet2.nickName">On Trumpet {{ trumpet2.nickName }} {{ trumpet2.last }}</div>
          <div v-show="trumpet3.nickName">On Trumpet {{ trumpet3.nickName }} {{ trumpet3.last }}</div>
          <div v-show="trumpet4.nickName">On Trumpet {{ trumpet4.nickName }} {{ trumpet4.last }}</div>
          <div v-show="trumpet5.nickName">On Trumpet {{ trumpet5.nickName }} {{ trumpet5.last }}</div>
          <div v-show="alto1.nickName">On Alto Sax {{ alto1.nickName }} {{ alto1.last }}</div>
          <div v-show="alto2.nickName">On Alto Sax {{ alto2.nickName }} {{ alto2.last }}</div>
          <div v-show="tenor1.nickName">On Tenor Sax {{ tenor1.nickName }} {{ tenor1.last }}</div>
          <div v-show="tenor2.nickName">On Tenor Sax {{ tenor2.nickName }} {{ tenor2.last }}</div>
          <div v-show="bari.nickName">On Bari Sax {{ bari.nickName }} {{ bari.last }}</div>
          <div v-show="bone1.nickName">On Trombone {{ bone1.nickName }} {{ bone1.last }}</div>
          <div v-show="bone2.nickName">On Trombone {{ bone2.nickName }} {{ bone2.last }}</div>
          <div v-show="bone3.nickName">On Trombone {{ bone3.nickName }} {{ bone3.last }}</div>
          <div v-show="bone4.nickName">On Trombone {{ bone4.nickName }} {{ bone4.last }}</div>
          <div v-show="bone5.nickName">On Trombone {{ bone5.nickName }} {{ bone5.last }}</div>
          <div v-show="piano.nickName">On Piano {{ piano.nickName }} {{ piano.last }}</div>
          <div v-show="bass.nickName">On Bass {{ bass.nickName }} {{ bass.last }}</div>
          <div v-show="drummer.nickName">On Drums {{ drummer.nickName }} {{ drummer.last }}</div>
          <div v-show="guitar.nickName">On Guitar {{ guitar.nickName }} {{ guitar.last }}</div>
          <div v-show="vocalist.nickName">On Vocals {{ vocalist.nickName }} {{ vocalist.last }}</div>
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
      trumpet1: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      trumpet2: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      trumpet3: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      trumpet4: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      trumpet5: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      alto1: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      alto2: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      tenor1: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      tenor2: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bari: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bone1: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bone2: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bone3: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bone4: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bone5: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      piano: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      bass: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      drummer: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      guitar: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      vocalist: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
      style: '',
      format: '',
      trumpet1Players:[],
      trumpet2Players:[],
      trumpet3Players:[],
      trumpet4Players:[],
      trumpet5Players:[],
      alto1Players:[],
      alto2Players:[],
      tenor1Players:[],
      tenor2Players:[],
      bariPlayers:[],
      bone1Players:[],
      bone2Players:[],
      bone3Players:[],
      bone4Players:[],
      bone5Players:[],
      pianoPlayers:[],
      bassPlayers:[],
      drummerPlayers:[],
      guitarPlayers:[],
      vocalistPlayers:[],
    };
  },
  created() {
    this.filterMusicians();
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
    filterMusicians() {
      this.trumpet1Players=this.musicians
        .filter(item => item.axe==='trumpet')
        .filter(item => item.nickName !== this.trumpet2.nickName)
        .filter(item => item.nickName !== this.trumpet3.nickName)
        .filter(item => item.nickName !== this.trumpet4.nickName) 
        .filter(item => item.nickName !== this.trumpet5.nickName);
      this.trumpet2Players=this.musicians
      .filter(item => item.axe==='trumpet')
        .filter(item => item.nickName !== this.trumpet1.nickName)
        .filter(item => item.nickName !== this.trumpet3.nickName)
        .filter(item => item.nickName !== this.trumpet4.nickName) 
        .filter(item => item.nickName !== this.trumpet5.nickName);
      this.trumpet3Players=this.musicians
      .filter(item => item.axe==='trumpet')
        .filter(item => item.nickName !== this.trumpet1.nickName)
        .filter(item => item.nickName !== this.trumpet2.nickName)
        .filter(item => item.nickName !== this.trumpet4.nickName) 
        .filter(item => item.nickName !== this.trumpet5.nickName);
      this.trumpet4Players=this.musicians
      .filter(item => item.axe==='trumpet')
        .filter(item => item.nickName !== this.trumpet1.nickName)
        .filter(item => item.nickName !== this.trumpet2.nickName)
        .filter(item => item.nickName !== this.trumpet3.nickName) 
        .filter(item => item.nickName !== this.trumpet5.nickName);
      this.trumpet5Players=this.musicians
      .filter(item => item.axe==='trumpet')
        .filter(item => item.nickName !== this.trumpet1.nickName)
        .filter(item => item.nickName !== this.trumpet2.nickName)
        .filter(item => item.nickName !== this.trumpet3.nickName) 
        .filter(item => item.nickName !== this.trumpet4.nickName);
      this.alto1Players = this.musicians
        .filter(item => item.axe==='alto')
        .filter(item => item.nickName !== this.alto2.nickName);
      this.alto2Players = this.musicians
        .filter(item => item.axe==='alto')
        .filter(item => item.nickName !== this.alto1.nickName);
      this.tenor1Players=this.musicians.filter(item => item.axe==='tenor')
        .filter(item => item.axe==='tenor')
        .filter(item => item.nickName !== this.tenor2.nickName);
      this.tenor2Players=this.musicians.filter(item => item.axe==='tenor')
        .filter(item => item.axe==='tenor')
        .filter(item => item.nickName !== this.tenor1.nickName);
      this.bariPlayers=this.musicians.filter(item => item.axe==='bari');
      this.bone1Players=this.musicians.filter(item => item.axe==='bone')
        .filter(item => item.axe==='bone')
        .filter(item => item.nickName !== this.bone2.nickName) 
        .filter(item => item.nickName !== this.bone3.nickName) 
        .filter(item => item.nickName !== this.bone4.nickName) 
        .filter(item => item.nickName !== this.bone5.nickName);
      this.bone2Players=this.musicians.filter(item => item.axe==='bone')
        .filter(item => item.axe==='bone')
        .filter(item => item.nickName !== this.bone1.nickName) 
        .filter(item => item.nickName !== this.bone3.nickName) 
        .filter(item => item.nickName !== this.bone4.nickName) 
        .filter(item => item.nickName !== this.bone5.nickName);
      this.bone3Players=this.musicians.filter(item => item.axe==='bone')
        .filter(item => item.axe==='bone')
        .filter(item => item.nickName !== this.bone1.nickName) 
        .filter(item => item.nickName !== this.bone2.nickName) 
        .filter(item => item.nickName !== this.bone4.nickName) 
        .filter(item => item.nickName !== this.bone5.nickName);
      this.bone4Players=this.musicians.filter(item => item.axe==='bone')
        .filter(item => item.axe==='bone')
        .filter(item => item.nickName !== this.bone1.nickName) 
        .filter(item => item.nickName !== this.bone2.nickName) 
        .filter(item => item.nickName !== this.bone3.nickName) 
        .filter(item => item.nickName !== this.bone5.nickName);
      this.bone5Players=this.musicians.filter(item => item.axe==='bone')
        .filter(item => item.axe==='bone')
        .filter(item => item.nickName !== this.bone1.nickName) 
        .filter(item => item.nickName !== this.bone2.nickName) 
        .filter(item => item.nickName !== this.bone3.nickName) 
        .filter(item => item.nickName !== this.bone4.nickName);
      this.pianoPlayers=this.musicians.filter(item => item.axe==='piano');
      this.bassPlayers=this.musicians.filter(item => item.axe==='bass');
      this.drummerPlayers=this.musicians.filter(item => item.axe==='drummer');
      this.guitarPlayers=this.musicians.filter(item => item.axe==='guitar');
      this.vocalistPlayers=this.musicians.filter(item => item.axe==='vocalist');
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
  flex-flow: column;
  justify-content: space-evenly;
}
.form {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
.eventcol {
  margin: 20px 20px;
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
.musicianscol {
  margin: 20px 20px;
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
.maker {
  width: 300px;
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

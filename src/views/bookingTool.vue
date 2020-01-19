<template>
  <div>
    <!--<h1 class="maker">Booking Tool</h1>-->
    <div class="maker">
      <h2>Select Your Date</h2>
        <input type="date">
    </div>
    <div class="maker">
      <h2 class="venue">Select Your Venue</h2>
        <input type="radio" class="venue" name="venue" value="Savoy Ballroom">Savoy Ballroom<br>
        <input type="radio" class="venue" name="venue" value="Cotton Club">Cotton Club<br>
        <input type="radio" class="venue" name="venue" value="Bird Land">Bird Land<br>
        <input type="radio" class="venue" name="venue" value="Village Vanguard">Village Vanguard<br>
    </div>
    <div class="maker">
      <h2>Select Your Style</h2>
        <input type="radio" name="style" value="Swing">Swing<br>
        <input type="radio" name="style" value="Bebop">Bebop<br>
        <input type="radio" name="style" value="Modal">Modal<br>
        <input type="radio" name="style" value="Jazz Rock">Jazz Rock<br>
        <input type="radio" name="style" value="Latin">Latin<br>
        <input type="radio" name="style" value="Dixieland">Dixieland<br>
    </div>
    <div class="maker">
      <h2>Select Your Format</h2>
      <input type="radio" name="format" value="big band">Big Band<br>
      <input type="radio" name="format" value="combo">Combo<br>
    </div> 
    <div class="musicians"> 
      <h2>Select your Musicians</h2>
      <div>
        <div>Trumpets<br>(select up to 5)
          <multiselect 
            v-model="trumpet" 
            :multiple="true" 
            :options="trumpets"
            :close-on-select="false"
            max="5"
            class="select"
          />
            <!--<select v-model="trumpet" size="5" multiple="multiple" @change="limitTrumpetSelection">
              <option v-for="trumpet in trumpets" :key="trumpet">{{ trumpet }}</option>
            </select>-->
        </div>    
      </div>
      <div>
        <div>Altos<br>(select up to 2)
          <multiselect 
            v-model="alto" 
            :multiple="true" 
            :options="altos"
            :close-on-select="false"
            max="2"
            class="select"
          />
          <!--<select v-model="alto" multiple="multiple">
            <option v-for="alto in altos" :key="alto">{{ alto }}</option>
          </select>-->
        </div>
      </div>  
      <div>
        <div>Tenors<br>(select up to 2)
          <multiselect 
            v-model="tenor" 
            :multiple="true" 
            :options="tenors"
            :close-on-select="false"
            max="2"
            class="select"
          />
          <!--<select v-model="tenor" multiple="multiple">
            <option v-for="tenor in tenors" :key="tenor">{{ tenor }}</option>
          </select>-->
        </div>  
      </div>
      <div>
        <div>Baris<br>(select 1)
          <multiselect 
            v-model="bari" 
            :multiple="true" 
            :options="baris"
            :close-on-select="false"
            max="1"
            class="select"
          />
          <!--<select v-model="bari">
            <option v-for="bari in baris" :key="bari">{{ bari }}</option>
          </select>-->
        </div>  
      </div>
      <div>
        <div>Bones<br>(select up to 5)
          <multiselect 
            v-model="bone" 
            :multiple="true" 
            :options="bones"
            :close-on-select="false"
            max="5"
            class="select"
          />
          <!--<select v-model="bone" multiple="multiple">
            <option v-for="bone in bones" :key="bone">{{ bone }}</option>
          </select>-->
        </div>  
      </div>
      <div>
        <div>Piano<br>(select 1)
          <multiselect 
            v-model="piano" 
            :multiple="true" 
            :options="pianos"
            :close-on-select="false"
            max="1"
            class="select"
          />
          <!--<select v-model="piano">
            <option v-for="piano in pianos" :key="piano">{{ piano }}</option>
          </select>-->
        </div>
      </div>
      <div>
        <div>Bass<br>(select 1)
          <multiselect 
            v-model="bass" 
            :multiple="true" 
            :options="basses"
            :close-on-select="false"
            max="1"
            class="select"
          />
          <!--<select v-model="bass">
            <option v-for="bass in basses" :key="bass">{{ bass }}</option>
          </select>-->
        </div>
      </div>
      <div>
        <div>Drummer<br>(select 1)
          <multiselect 
            v-model="drummer" 
            :multiple="true" 
            :options="drummers"
            :close-on-select="false"
            max="1"
            class="select"
          />
          <!--<select v-model="drummer">
            <option v-for="drummer in drummers" :key="drummer">{{ drummer }}</option>
          </select>-->
        </div>
      </div>
      <div>
        <div>Guitar<br>(select 1)
          <multiselect 
            v-model="guitar" 
            :multiple="true" 
            :options="guitars"
            :close-on-select="false"
            max="1"
            class="select"
          />
          <!--<select v-model="guitar">
            <option v-for="guitar in guitars" :key="guitar">{{ guitar }}</option>
          </select>-->
        </div>
      </div>
      <div>
        <div>Vocalist<br>(select 1)
          <multiselect 
            v-model="vocalist" 
            :multiple="true" 
            :options="vocalists"
            :close-on-select="false"
            max="1"
            class="select"
          />
          <!--<select v-model="vocalist">
            <option v-for="vocalist in vocalists" :key="vocalist">{{ vocalist }}</option>
          </select>-->
        </div>
      </div>
    </div>
    <h2 class="maker">This date's current personnel are:</h2>
    <div class="maker">
      <div v-show="trumpet.length > 0">On Trumpet {{ trumpet }}</div>
      <div v-show="alto.length > 0">On Alto Sax {{ alto }}</div>
      <div v-show="tenor.length > 0">On Tenor Sax {{ tenor }}</div>
      <div v-show="bari.length > 0">On Bari Sax {{ bari }}</div>
      <div v-show="bone.length > 0">On Trombone {{ bone }}</div>
      <div v-show="piano.length > 0">On Piano {{ piano }}</div>
      <div v-show="bass.length > 0">On Bass {{ bass }}</div>
      <div v-show="drummer.length > 0">On Drums {{ drummer }}</div>
      <div v-show="guitar.length > 0">On Guitar {{ guitar }}</div>
      <div v-show="vocalist.length > 0">On Vocals {{ vocalist }}</div>
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
import Multiselect from 'vue-multiselect';
import { mapState } from 'vuex';

export default {
  name: 'BookingTool',
  props: [],
  components: { Multiselect },
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
      guitars: 'guitars',
      vocalists: 'vocalists',
      gigsBooked: 'gigsBooked',
      styles: 'styles',
      formats: 'formats',
    }),
  },
  data() {
    return {
      trumpet: [],
      trumpetOptions: [],
      alto: [],
      tenor: [],
      bari: '',
      bone: [],
      piano: '',
      bass: '',
      drummer: '',
      guitar: '',
      vocalist: '',
      style: '',
    };
  },
  created() {
    console.log(this.$route);
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

  .maker {
    width: 250px;
    background-color: grey;
    opacity: .7;
    color: white;
    text-shadow: 2px 2px 4px #000000;
 }
  .musicians {
    margin: 20px 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
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

  /*.fajita {
    margin: 50px;
  }

  .ingredients {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 50px;
  }*/

  button {
    padding: 30px;
    font-size: 20px;
    margin: 20px;
  }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

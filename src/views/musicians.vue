<template>
  <div class="form">
    <h1>Welcome to Afterlife Jazz</h1>
    <h2>New Musician Sign Up</h2>
      
      <h3>First Name</h3>
      <input v-model="cat.first">
      <h3>Last Name</h3>
      <input v-model="cat.last">
      <h3>But the cats call me</h3>
      <input v-model="cat.nickName">
      <h3>Axe</h3>
      <input v-model="cat.axe">
      <h3>Style</h3>
      <input v-model="cat.style">
      <h3>Format</h3>
      <input v-model="cat.format">
      <h3>DOB</h3>
      <input v-model="cat.dob">
      <h3>DOD</h3>
      <input v-model="cat.dod">
      <button @click="addCat">Submit</button>
      <h3>Roster</h3>
      <div v-for="(cat, index) in musicians" :key="index">
          {{ cat.nickName }} {{ cat.last }}
      </div>

        <!--<h3>Instrument</h3>
        <select v-model="instrument">
          <option v-for="instrument in instruments" :key="instrument">{{ instrument }}</option>
        </select></br>
        <input v-model="instrument">
        <button @click="addInstrument">Add Instrument</button>
      </div>
        <select v-model="instrument">
          <option v-for="type in instruments" :key="type">{{ type }}</option>
        </select>
      </div> 
      <form class="signup">
        First name:
        <input type="text" name="firstname" v-model="first">
        <br>
        Last name:
        <input type="text" name="lastname">
        <br>
        But the cats call me:
        <input type="text" name="nickname">
        <br>
        Birthday:
        <input type="date" name="bday">
      </form>
      
      <div class="instruments" v-if="instrument == 'trumpet'">Lead Trumpet?
        <select>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>  
      <div class="instruments">
        <form v-if="instrument == 'other'" name="otherInstrumentForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
          Please Specify: <input type="text" name="otherInstrument">
        </form>  
      </div>  
      <div class="styles">Style<br>
        <input type="checkbox" name="style1" value="swing"> Swing<br>
        <input type="checkbox" name="style2" value="bebop"> Bebop<br>
        <input type="checkbox" name="style3" value="modal"> Modal<br>
        <input type="checkbox" name="style4" value="jazz rock"> Jazz Rock<br>
        <input type="checkbox" name="style5" value="latin"> Latin<br>
        <input type="checkbox" name="style6" value="dixieland"> Dixieland<br>
        <input type="checkbox" name="style7" value="free form"> Free Form<br>
      </div>  
      <div>Format<br>
        <input type="checkbox" name="format1" value="big band"> Big Band<br>
        <input type="checkbox" name="format" value="combo"> Combo<br>
      </div>  
      <div>My Ghostly Mug
        <input type="image">
      </div>-->
      
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CatList',
  computed: {
    ...mapState({
      musicians: 'musicians',
    }),
  },
  data() {
    return {
      cat: {first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null},
    }
  },
  methods: {
    addCat() {
      this.$store.dispatch('addCat', this.cat);
      this.cat={first:null, last:null, nickName:null, axe:null, style:null, format:null, dob:null, dod:null};
    },
    /*addInstrument() {
      this.$store.dispatch('addInstrument', this.instrument);
      this.instrument = '';
    }*/
  }
};
</script>

<style>
.form {
  margin: 100px, 100px;
}
.signup {
margin: 100px, 100px;
}

</style>
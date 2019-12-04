<template>
  <div class="form">
    <h1>Welcome to Afterlife Jazz</h1>
    <h2>New Musician Sign Up</h2>
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
      <div class="instruments">Instrument
        <select v-model="instrument">
          <option v-for="type in instruments" :key="type">{{ type }}</option>
        </select>
      </div>
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
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      instruments: 'instruments',
      styles: 'styles',
      formats: 'formats',
    }),
  },
  data() {
    return {
      first: '',
      instrument: ''
    }
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
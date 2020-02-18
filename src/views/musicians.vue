<template>
  <div class="page">
    <div class="form">  
      <div class="info">
        <div class="catcol">
          <h2>New Musician Sign Up</h2>
          <div class="bio">First Name
            <input v-model="cat.first">
          </div>  
          <div class="bio">Last Name
            <input v-model="cat.last">
          </div>  
          <div class="bio">But the cats call me
            <input v-model="cat.nickName">
          </div>  
          <div class="bio">Axe            
            <select v-model="axe"> 
              <option v-for="(axe, index) in axes" :value="axe" :key="index">{{ axe }}</option>
            </select>
          </div>  
          <div class="bio">Style
            <select multiple="true" v-model="style"> 
              <option v-for="(style, index) in styles" :value="style" :key="index">{{ style }}</option>
            </select>
          </div>
          <div class="bio">Format
            <select multiple="true" v-model="format"> 
              <option v-for="(format, index) in formats" :value="format" :key="index">{{ format }}</option>
            </select>
          </div>
          <div class="bio">DOB
            <input type="date" v-model="cat.dob">
          </div>
          <div>Still Living?
            <input type="checkbox">
          </div>  
          <div class="bio">DOD
            <input type="date" v-model="cat.dod">
          </div>
          <button @click="addCat">Submit</button>
        </div>
      </div>   
      <div class="roster">  
      <h2>Roster</h2>
        <div v-for="(cat, index) in musicians" :key="index">
            {{ cat.nickName }} {{ cat.last }}
        </div>
      </div>
      <div class="waiting">
      <h2>Waiting List</h2>
      </div>  
    </div>    
  </div>   
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CatList',
  computed: {
    ...mapState({
      musicians: 'musicians',
      axes: 'axes',
      styles: 'styles',
      formats: 'formats',
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
    addAxe() {
      this.$store.dispatch('addAxe', this.axe);
      this.axe = '';
    }
  }
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
}
.form {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
.info {
  width: 300px;
  margin: 20px 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: right;
  background-color: grey;
  opacity: .7;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.roster {
  width: 300px;
  margin: 20px 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: right;
  background-color: grey;
  opacity: .7;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.waiting {
  width: 300px;
  margin: 20px 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: right;
  background-color: grey;
  opacity: .7;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.catcol {
  width: 300px;
  background-color: grey;
  opacity: .7;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.bio {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 200px;
  margin: 50px, 50px; 
  background-color: grey;
  opacity: .7;
  color: white;
  font-size: 18px;
  text-shadow: 2px 2px 4px #000000;
}

</style>
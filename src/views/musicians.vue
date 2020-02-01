<template>
  <div class="page">
    <h1>Welcome to Afterlife Jazz</h1> 
    <div class="form">  
      <div class="info">
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
          <div class="bio">DOD
            <input type="date" v-model="cat.dod">
          </div>
          <button @click="addCat">Submit</button>
      </div>
      <div class="roster">  
        <h2>Roster</h2>
        <div v-for="(cat, index) in musicians" :key="index">
            {{ cat.nickName }} {{ cat.last }}
        </div>
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
  justify-content: center;
  width: 100%;
  padding: 50px, 50px, 50px, 50px;
}
h3 {
  padding: 10px, 10px;
}
.form {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding: 50px, 50px, 50px, 50px;
  margin: 50px, 50px;
}
.info {
  padding: 50px, 50px, 50px, 50px;
  margin: 100px, 100px;
}
.bio {
  padding: 50px, 50px, 50px, 50px;
  margin: 50px, 50px; 
}
</style>
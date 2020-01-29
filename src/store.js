import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicians: [{ first: 'Clark', last: 'Terry', nickName: 'Clark', axe: 'trumpet', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Marion', last: 'Childers', nickName: 'Buddy', axe: 'trumpet', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'John', last: 'Gillespie', nickName: 'Dizzy', axe: 'trumpet', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'William', last: 'Adderley', nickName: 'Cannon Ball', axe: 'alto', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Benjamin', last: 'Goldson', nickName: 'Benny', axe: 'alto', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'John', last: 'Coletrane', nickName: 'Trane', axe: 'tenor', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Walter', last: 'Rollins', nickName: 'Sonny', axe: 'tenor', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Gerry', last: 'Mulligan', nickName: 'Gerry', axe: 'bari', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Locksley', last: 'Hampton', nickName: 'Slide', axe: 'bone', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Kai', last: 'Winding', nickName: 'Kai', axe: 'bone', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'William', last: 'Basie', nickName: 'Count', axe: 'piano', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Paul', last: 'Chambers', nickName: 'Mr. PC', axe: 'bass', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Joseph', last: 'Jones', nickName: 'Philly Joe', axe: 'drums', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Jean', last: 'Reinhardt', nickName: 'Django', axe: 'guitar', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Billie', last: 'Holiday', nickName: 'Lady Day', axe: 'vocals', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
    { first: 'Cabell', last: 'Calloway', nickName: 'Cab', axe: 'vocals', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' }],
    gigsBooked: [],
    styles: ['Swing', 'Bebop', 'Modal', 'Jazz Rock', 'Latin', 'Dixieland', 'Free Form'],
    formats: ['Big Band', 'Combo'],
  },
  mutations: {
    addTrumpet(state, cat) {
      state.musicians.push(cat);
    },
    addBand(state, band) {
      state.gigsBooked.push(band);
    },
    addAxes(state, axe) {
      state.axes.push(axe);
    },
    addStyle(state, style) {
      state.styles.push(style);
    },
  },
  actions: {
    addTrumpet({ commit }, trumpet) {
      commit('addTrumpet', trumpet);
    },
    addAlto({ commit }, alto) {
      commit('addAlto', alto);
    },
    addTenor({ commit }, tenor) {
      commit('addTenor', tenor);
    },
    addBari({ commit }, bari) {
      commit('addBari', bari);
    },
    addBone({ commit }, bone) {
      commit('addBone', bone);
    },
    addPiano({ commit }, piano) {
      commit('addPiano', piano);
    },
    addBass({ commit }, bass) {
      commit('addBass', bass);
    },
    addDrums({ commit }, drummer) {
      commit('addDrum', drummer);
    },
    addGuitar({ commit }, guitar) {
      commit('addGuitar', guitar);
    },
    addVocalist({ commit }, vocalist) {
      commit('addVocalist', vocalist);
    },
    addBand({ commit }, band) {
      commit('addBand', band);
    },
    addAxe({ commit }, axe) {
      commit('addAxe');
    },
  },
});

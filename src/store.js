import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trumpets: ['Clark Terry', 'Eugene Young', 'Clifford Brown', 'Jack Sheldon', 'Lee Morgan', 'Chet Baker', 'Austin Brisbois', 'William Anderson', 'Pete Candoli', 'Conte Candoli', 'Alan Rubin', 'Randy Brecker'],
    altos: ['William Adderley', 'Charlie Parker', 'Benny Goldson', 'Art Pepper', 'Paul Desmond', 'Johnny Hodges', 'Jackie McLean'],
    tenors: ['John Coletrane', 'Sonny Rollins', 'Stan Getz', 'Wayne Shorter', 'Dexter Gordon', 'Coleman Hawkins', 'Lester Young', 'Michael Brecker'],
    baris: ['Gerry Mulligan', 'Howard Johnson', 'Harry Carney'],
    bones: ['Bob Brookmeyer', 'Kai Winding', 'Bob Enivolsen', 'James Johnson', 'Locksley Hampton', 'Jack Teagarden', 'Curtis Fuller', 'Tommy Dorsey', 'Bill Watrous', 'Frank Rosolino', 'Carl Fontana', 'Glen Miller'],
    piano: ['William Basie', 'Edward Ellington', 'Dave Brubeck', 'Henry Mancini', 'Art Tatum', 'Oscar Peterson', 'Thelonius Monk', 'McCoy Tyner'],
    basses: ['Ron Carter', 'Ray Brown', 'Charles Mingus', 'Paul Chambers', 'Stanley Clarke', 'Eddie Gomez'],
    drummers: ['Elvin Jones', 'Joseph Jones', 'Art Blakey', 'Max Roach', 'Gene Krupa', 'Buddy Rich', 'Kenny Clarke', 'Shelly Manne'],
    guitars: ['Freddie Greene', 'Joe Pass', 'Jean Reinhardt', 'Wes Montgomery', 'John Scofield', 'George Benson', 'Pat Metheny', 'Jim Hall'],
    vocalists: ['Ella Fitzgerald', 'Sarah Vaughn', 'Carmen McRae', 'Billie Holiday', 'Nancy Wilson', 'Joe Williams', 'Annie Ross', 'Jon Hendricks', 'Mel Torme', 'Nat Cole', 'Cabell Calloway', 'Frank Sinatra'],
    gigsBooked: [],
    instruments: ['trumpet', 'alto', 'tenor', 'bari', 'bone', 'piano', 'bass', 'drums', 'guitar', 'vocalist', 'other'],
    styles: ['Swing', 'Bebop', 'Modal', 'Jazz Rock', 'Latin', 'Dixieland', 'Free Form'],
    formats: ['Big Band', 'Combo'],
  },
  mutations: {
    addTrumpet(state, trumpet) {
      state.trumpets.push(trumpet);
    },
    addAlto(state, alto) {
      state.altos.push(alto);
    },
    addTenor(state, tenor) {
      state.tenors.push(tenor);
    },
    addBari(state, bari) {
      state.baris.push(bari);
    },
    addBone(state, bone) {
      state.bones.push(bone);
    },
    addPiano(state, piano) {
      state.pianos.push(piano);
    },
    addBass(state, bass) {
      state.basses.push(bass);
    },
    addDrums(state, drummer) {
      state.drummers.push(drummer);
    },
    addGuitar(state, guitar) {
      state.guitars.push(guitar);
    },
    addVocalist(state, vocalist) {
      state.vocalists.push(vocalist);
    },
    addBand(state, band) {
      state.gigsBooked.push(band);
    },
    addInstruments(state, instrument) {
      state.instruments.push(instruemnt);
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
    addInstrument({ commit }, instrument) {
      commit('addInstrument');
    },
  },
});

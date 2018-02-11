import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

    state: {
      currentTrack: 0,
      playlist: [
        "http://files.realmusic.ru/lofi/1623349/1623349.mp3",
        "http://files.realmusic.ru/lofi/1592117/1592117.mp3",
        "http://files.realmusic.ru/lofi/1590311/1590311.mp3"
      ],
    },

    getters: {
      currentAudio: state => {
        return [ state.playlist[state.currentTrack] ];
      }
    },

    mutations: {
      prevTrack (state) {
        state.currentTrack = Math.max(0, state.currentTrack - 1);
      },
      nextTrack (state) {
        state.currentTrack = Math.min(state.playlist.length - 1, state.currentTrack + 1);
      },
    }

}

export default new Vuex.Store(state);

<template>

    <div>

        <div>
            <button @click="play">Play</button>
            <button @click="stop">Stop</button>
            <button @click="prevTrack">Prev</button>
            <button @click="nextTrack">Next</button>
        </div>

        <div>Cur: {{ $store.getters.currentAudio[0] }}</div>
        <div>Pos: {{ seek }}</div>
        <div>Dur: {{ duration }}</div>

    </div>

</template>

<script>

import VueHowler from 'vue-howler';

export default {

  mixins: [
    VueHowler
  ],

  methods: {
    prevTrack: function() {
      this.$store.commit('prevTrack');
    },
    nextTrack: function() {
      this.stop();
      this.$store.commit('nextTrack');
    },
  }

}

</script>

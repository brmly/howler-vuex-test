<template>
  <div id="app">

    <Player :sources="$store.getters.currentAudio" :html5="true" :autoplay="false" :preload="false"></Player>

  </div>
</template>

<script>
import Player from './Player.vue'

export default {
  name: 'app',
  components: {
    Player,
  },
}
</script>

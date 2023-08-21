<template>
  <h1>Begining Pokemon List!</h1>
  <div class="poke-list">
    <div v-if="!pokemonData">Loading data...</div>
    <pre v-else><Poke_Card />
    {{ pokemonData.results}} 
  </pre>
  </div>
</template>

<script>
import Poke_Card from './Poke_Card.vue'

export default {
  components: {
    Poke_Card
  },
  data() {
    return {
      pokemonData: []
    }
  },
  methods: {
    async fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      this.pokemonData = await response.json()
      console.log(this.pokemonData.results)
      console.log(this.pokemonData.results[0].name)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

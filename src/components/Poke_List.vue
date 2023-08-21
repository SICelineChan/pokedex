<template>
  <h1>Begining Pokemon List!</h1>
  <div class="poke-list">
    <div v-for="value in pokemonData" :key="value">
      <Poke_Card :pokeInfoURL="value.url" />
    </div>
    {{ value }}
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
    async fetchData(url) {
      const response = await fetch(url)
      const result = await response.json()
      console.log(result.results)
      return result.results
    }
  },
  async mounted() {
    this.pokemonData = await this.fetchData('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0')
  }
}
</script>
<style scoped>
.poke-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;

  gap: 16px;
}
</style>

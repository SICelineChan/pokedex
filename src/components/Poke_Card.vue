<template>
  <!-- <div class="poke-card">
    <div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
      />
      <p class="pokeId">#0079</p>
      <div class="pokeName">SlowPoke</div>
    </div>
  </div> -->

  <div class="poke-card">
    <div v-if="PokeInfo">
      <div class="pokeName">{{ PokeInfo.name }}</div>
      <div class="pokeId">#{{ PokeInfo.id }}</div>
      <img v-bind:src="PokeInfo.imgURL" />
      <div class="pokeOrder">order: {{ PokeInfo.order }}</div>
    </div>
    <div v-else>Wait, something's wrong!</div>
  </div>
</template>

<script>
export default {
  props: ['pokeInfoURL'],
  data() {
    return {
      PokeInfo: []
    }
  },
  methods: {
    async fetchPokeInfo(url) {
      const response = await fetch(url)
      const result = await response.json()
      // this.PokeInfo = infoResult
      console.log(result)
      return {
        id: result.id,
        name: result.name,
        imgURL: result.sprites.other['official-artwork'].front_default,
        order: result.order
      }
    }
  },
  async mounted() {
    this.PokeInfo = await this.fetchPokeInfo(this.pokeInfoURL)
  }
}
</script>

<style scoped>
.poke-card {
  width: 200px;
  border-radius: 20px;
  background-color: #b2b2b2b2;
}
.poke-card img {
  width: 100%;
}
.pokeId,
.pokeName,
.pokeOrder {
  padding: 5px;
  text-align: center;
}
.pokeName {
  font-weight: bolder;
}
</style>

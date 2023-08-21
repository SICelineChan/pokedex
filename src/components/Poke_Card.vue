<template>
  <div class="poke-card">
    <div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
      />
      <p class="pokeId">#0079</p>
      <div class="pokeName">SlowPoke</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.poke-card {
  width: 180px;
  border-radius: 20px;
  background-color: #b2b2b2b2;
}
.poke-card img {
  width: 80%;
  margin: 0 auto;
  display: block;
}
.pokeId,
.pokeName {
  padding: 5px;
  text-align: center;
}
.pokeName {
  font-weight: bolder;
}
</style>

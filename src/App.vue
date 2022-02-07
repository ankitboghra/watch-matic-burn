<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Statistics</router-link> |
      <router-link to="/burn-txs">Transactions</router-link> |
      <router-link to="/burn-matic">Burn Matic</router-link> |
      <router-link to="/claim-nft">Claim NFT</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

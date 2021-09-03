<template>
  <div id="app">
    <div id="nav">
      <router-link to="/settings">Settings</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/">Game</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=McLaren&display=swap&subset=latin-ext')

*
  margin: 0
  box-sizing: border-box
  font-family: 'McLaren', cursive

body
  margin: 0
#app
  color: #2c3e50
  min-height: 100vh
  text-align: center
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  font-family: Avenir, Helvetica, Arial, sans-serif
  background-image: url('~@/assets/dark-triangles.png')

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983
</style>

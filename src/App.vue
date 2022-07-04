<script setup></script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <router-link :to="{ name: 'home' }">Home</router-link> <br>
  <router-link :to="{ name: 'contact' }">Contact</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

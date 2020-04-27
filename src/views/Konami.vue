<template>
  <div>
    <h1 v-if="encours">Félicitation</h1>
    <h1 v-else>Tu arrives trop tard, tous les lots ont été remporté 😓</h1>
    <h3 v-if="encours">Tu viens de gagner une pinte offerte 🍻 au K1ZE si tu me transmet le mot de passe présent dans
      l'URL !!</h3>
    <p>-</p>
    <h4>XJU</h4>
  </div>
</template>

<script>
  export default {
    name: 'Konami',
    data () {
      return {
        encours: true
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

</style>

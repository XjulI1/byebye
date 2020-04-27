<template>
  <div class="home">
    <h2>Ton polygramme s'il te plait :</h2>

    <div class="inp">
      <input type="text" id="inp" name="polygramme" v-model="polygram"/>
      <span class="label">Polygramme</span>
      <span class="focus-bg"></span>
    </div>

    <h4>J'ai un petit mot pour toi ...</h4>

    <div class="message" v-if="octo">
      {{octo.message || random()}}
      <br>
      <br>
      <div class="contact" v-if="polygram.toUpperCase() !== 'XJU' && polygram.toUpperCase() !== 'WEBF'">
        <h3>Et restons en contact :</h3>
        <ul>
          <li>
            <a href="mailto:xavijulien@gmail.com">xavijulien@gmail.com</a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/xavierjulien/">Linkedin</a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/xjuli1">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import octos from '@/assets/octos.json'
  import axios from 'axios'

  export default {
    name: 'Home',

    components: {},

    computed: {
      octo () {
        return octos.find(octo => octo.trigram === this.polygram.toUpperCase())
      }
    },

    watch: {
      octo (value) {
        if (value) {
          clearTimeout(this.send)
          this.send = setTimeout(function () {
            axios.post('https://api.endpoint.fr/api/byebye', {
              polygramme: value.trigram
            })
          }, 500)
        }
      }
    },

    data () {
      return {
        polygram: '',
        rmessage: [
          'On n\'a jamais vraiment eu l\'occasion de se connaître, mais peut être dans une prochaine aventure, qui sait ... le monde est petit.',
          'On ne se serait pas déjà croisé au K1ZE 😅 !? ... Peut être une prochaine fois.',
          'Continues à profiter d\'OCTO et surtout : demande pardon plutôt que permission, tu en ressortiras toujours grandi !!'
        ],
        send: null
      }
    },

    methods: {
      random () {
        return this.rmessage[Math.floor(Math.random() * 3)]
      }
    }
  }
</script>

<style>
  .inp {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 180px;
    border-radius: 3px;
    overflow: hidden;
  }

  .inp .label {
    position: absolute;
    top: 20px;
    left: 12px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  .inp .focus-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    z-index: -1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: left;
    transform-origin: left;
  }

  .inp input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-align: center;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 16px 12px 0 0;
    height: 56px;
    font-size: 1.2rem;
    font-weight: 400;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    color: #000;
    -webkit-transition: all 0.15s ease;
    transition: all 0.15s ease;
  }

  .inp input:hover {
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }

  .inp input:not(:placeholder-shown) + .label {
    color: rgba(0, 0, 0, 0.5);
    -webkit-transform: translate3d(0, -12px, 0) scale(0.75);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  .inp input:focus {
    outline: none;
    box-shadow: inset 0 -2px 0 #42b983;
  }

  .inp input:focus + .label {
    color: #42b983;
    -webkit-transform: translate3d(0, -12px, 0) scale(0.75);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  .inp input:focus + .label + .focus-bg {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }

  .message {
    margin-top: 30px;
  }

  .contact {
    text-align: left;
  }
</style>

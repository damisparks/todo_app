<template>
  <v-container mt-5>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Sign in to SmartList</h1>

        <v-form>
          <v-text-field
            label="Email"
            placeholder="Email"
            :value="loginEmail"
            @input="SET_LOGIN_EMAIL"
            @keypress.enter="login"
          />
          <v-text-field
            label="Password"
            placeholder="Password"
            type="password"
            autocomplete="new-password"
            :value="loginPassword"
            @input="SET_LOGIN_PASSWORD"
            @keypress.enter="login"
          />
          <v-alert v-if="loginError" type="error">{{ loginError }}</v-alert>
          <v-btn @click="login">
            <v-icon>fingerprint</v-icon>Login
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('authenticate', ['loginEmail', 'loginPassword', 'loginError'])
  },
  methods: {
    ...mapMutations('authenticate', ['SET_LOGIN_EMAIL', 'SET_LOGIN_PASSWORD']),
    ...mapActions('authenticate', ['login'])
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <v-container mt-5>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Register</h1>
        <v-form>
          <v-text-field label="Email" placeholder="Email" :value="email" @input="SET_EMAIL"></v-text-field>
          <v-text-field
            label="Password"
            placeholder="Password"
            type="password"
            autocomplete="new-password"
            :value="password"
            @input="SET_PASSWORD"
          ></v-text-field>
          <v-alert type="error" :value="regError">{{regError}}</v-alert>
          <v-btn @click="register">
            <v-icon>account_box</v-icon>Register
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      //   email: null,
      //   password: null,
    };
  },
  computed: {
    ...mapState('authenticate', ['email', 'password', 'regError']),
  },
  methods: {
    ...mapMutations('authenticate', ['SET_EMAIL', 'SET_PASSWORD']),
    ...mapActions('authenticate', ['register']),
  },
};
</script>

<style lang="scss" scoped>
</style>

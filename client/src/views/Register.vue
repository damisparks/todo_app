<template>
  <v-container mt-5>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <v-form>
          <v-text-field label="E-mail" placeholder="Email" v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            placeholder="Password"
            type="password"
            autocomplete="new-password"
            v-model="password"
          ></v-text-field>
          <v-btn>
            <v-icon>account_box</v-icon>Register
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

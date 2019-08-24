<template>
  <div>
    <v-toolbar color="black" fixed>
      <v-toolbar-title class="white--text font-weight-bold">SmartList</v-toolbar-title>
      <v-toolbar-items>
        <v-btn v-if="isLoggedIn" color="white" to="/" text>
          <v-icon>list_alt</v-icon>List
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="!isLoggedIn" color="white" text to="/login">
          <v-icon>fingerprint</v-icon>Login
        </v-btn>
        <v-btn text>
          <div class="my-2">
            <v-btn v-if="!isLoggedIn" depressed color="white" to="/register">
              <v-icon>person_add</v-icon>Register
            </v-btn>
          </div>
        </v-btn>
        <v-btn text>
          <div class="my-2">
            <v-btn v-if="isLoggedIn" @click="logout" depressed color="white">
              <v-icon>directions_run</v-icon>Logout
            </v-btn>
          </div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("authenticate", ["isLoggedIn"])
  },
  methods: {
    ...mapActions("authenticate", ["logout"])
  }
};
</script>

<style lang="scss" scoped>
</style>

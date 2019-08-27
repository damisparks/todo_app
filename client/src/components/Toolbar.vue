<template>
  <div>
    <v-toolbar fixed list-topbar>
      <v-toolbar-items>
        <div class="my-2">
          <v-icon class="ml-5" medium color="white">description</v-icon>
        </div>
        <v-toolbar-title class="white--text my-2 font-weight-bold mr-7">SmartList</v-toolbar-title>
        <div class="my-2">
          <v-btn color="white" small v-if="isLoggedIn" to="/" text>
            <v-icon color="red accent-4">list_alt</v-icon>List
          </v-btn>
        </div>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <div class="my-2">
          <v-btn class="mx-6" small v-if="!isLoggedIn" color="white" text to="/login">
            <v-icon>fingerprint</v-icon>Login
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn class="mr-12" small v-if="!isLoggedIn" color="white" to="/register">
            <v-icon>person_add</v-icon>Register
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn small class="mr-12" v-if="isLoggedIn" @click="logout" color="white">
            <v-icon>directions_run</v-icon>Logout
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('authenticate', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('authenticate', ['logout'])
  }
}
</script>

<style lang="scss" scoped>
[list-topbar] {
  background-color: #111;
  height: 44px;
}

.v-btn__content {
  font-size: 14px;
  font-weight: 400;
}
</style>

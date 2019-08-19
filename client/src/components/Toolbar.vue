<template>
  <div>
    <v-toolbar color="black" fixed>
      <v-toolbar-title>
        <v-btn color="white" text to="/">SmartList</v-btn>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="white" text>
          <v-icon>list_alt</v-icon>List
        </v-btn>
        <v-btn color="white" text>
          <v-icon>format_list_numbered</v-icon>Todo
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="white" text to="/about">About</v-btn>
        <v-btn color="white" text>
          <v-icon>fingerprint</v-icon>Login
        </v-btn>
        <v-btn text>
          <div class="my-2">
            <v-btn depressed color="white">
              <v-icon>person_add</v-icon>Register
            </v-btn>
          </div>
        </v-btn>
        <v-btn text>
          <div class="my-2">
            <v-btn depressed color="white">
              <v-icon>directions_run</v-icon>Logout
            </v-btn>
          </div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

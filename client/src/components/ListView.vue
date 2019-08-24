<template>
  <Holder title="Lists">
    <v-layout class="mt-5">
      <v-flex xs8>
        <v-text-field
          placeholder="My List name..."
          single-line
          solo
          @input="SET_NEW_LIST_NAME"
          :value="newListName"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn @click="createList" class="ma-2" color="primary">
          <v-icon dark>add_circle</v-icon>Create List
        </v-btn>
      </v-flex>
    </v-layout>
  </Holder>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("lists", ["newListName"])
  },
  methods: {
    ...mapMutations("lists", ["SET_NEW_LIST_NAME"]),
    ...mapActions("lists", ["createList"])
  }
};
</script>

<style lang="scss" scoped>
</style>

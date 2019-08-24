<template>
  <Holder title="Lists">
    <div dark v-for="list in lists" :key="list.id">
      <v-layout row wrap>
        <v-flex xs9 class="text-left pl-4">
          {{ list.title }}
          <span v-if="!list.isEditable">{{ list.title }}</span>
          <v-text-field v-if="list.isEditable" :value="list.tile"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon v-if="!list.isEditable" @click="SET_IS_EDITABLE(list)">edit</v-icon>
          <v-icon v-if="list.isEditable" @click="CAN_NOT_SET_TO_EDIT(list)">check_circle</v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-layout class="mt-2">
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
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  mounted() {
    this.fetchList()
  },
  computed: {
    ...mapState('lists', ['newListName', 'lists'])
  },
  methods: {
    ...mapMutations('lists', [
      'SET_NEW_LIST_NAME',
      'SET_IS_EDITABLE',
      'CAN_NOT_SET_TO_EDIT'
    ]),
    ...mapActions('lists', ['createList', 'fetchList'])
  }
}
</script>

<style lang="scss" scoped>
</style>

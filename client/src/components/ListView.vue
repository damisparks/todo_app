<template>
  <Holder title="Lists">
    <div v-for="list in lists" :key="list.id" dark>
      <v-layout row wrap>
        <v-flex xs9 class="text-left pl-4">
          <v-card max-width="344" class="mx-auto" color="#385F73">
            <v-card-title class="headline mb-3">{{ list.title }}</v-card-title>
          </v-card>

          <span v-if="!list.isEditable" />
          <v-text-field
            v-if="list.isEditable"
            autofocus
            :value="list.title"
            @keyup.enter="saveListTitle(list)"
            @input="SET_LIST_TITLE({list, title:$event})"
          />
        </v-flex>
        <v-flex xs3>
          <v-icon v-if="!list.isEditable" @click="SET_IS_EDITABLE(list)">edit</v-icon>
          <v-icon v-if="list.isEditable" @click="saveListTitle(list)">check_circle</v-icon>
          <v-icon @click="deleteList(list)">delete</v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-layout class="mt-2">
      <v-flex xs8>
        <v-text-field
          placeholder="My List name..."
          single-line
          solo
          :value="newListName"
          @keyup.enter="createList"
          @input="SET_NEW_LIST_NAME"
        />
      </v-flex>
      <v-flex xs4>
        <v-btn class="ma-2" color="primary" @keypress.enter="createList">
          <v-icon dark>add_circle</v-icon>Create
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
      'CAN_NOT_SET_TO_EDIT',
      'SET_LIST_TITLE'
    ]),
    ...mapActions('lists', [
      'createList',
      'fetchList',
      'saveListTitle',
      'deleteList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.v-icon {
  cursor: pointer;
}

.v-icon:hover {
  color: #333;
}
</style>

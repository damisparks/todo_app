<template>
  <Holder title="Lists">
    <div v-for="list in lists" :key="list.id" dark>
      <CanEditRecord
        :isEditable="!list.isEditable"
        :title="list.title"
        @onClick="listHasBeenCLicked(list)"
        @onInput="SET_LIST_TITLE({list, title: $event})"
        @onEdit="SET_IS_EDITABLE(list)"
        @onSave="saveListTitle(list)"
        @onDelete="deleteList(list)"
      />
    </div>
    <CreateRecord
      placeholder="My list is .... "
      @onInput="SET_NEW_LIST_NAME"
      :value="newListName"
      @create="createList"
    />
  </Holder>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import CreateRecord from '@/components/CreateRecord.vue'
import CanEditRecord from '@/components/CanEditRecord.vue'

export default {
  components: {
    CreateRecord,
    CanEditRecord
  },
  mounted() {
    this.fetchList()
  },
  computed: {
    ...mapState('lists', ['newListName', 'lists'])
  },
  methods: {
    listHasBeenCLicked(list) {
      this.SET_CURRENT_LIST(list)
      this.fetchTodosForList(list)
    },
    ...mapMutations('lists', [
      'SET_NEW_LIST_NAME',
      'SET_IS_EDITABLE',
      'CAN_NOT_SET_TO_EDIT',
      'SET_LIST_TITLE',
      'SET_CURRENT_LIST'
    ]),
    ...mapActions('lists', [
      'createList',
      'fetchList',
      'saveListTitle',
      'deleteList'
    ]),
    ...mapActions('todos', ['fetchTodosForList'])
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

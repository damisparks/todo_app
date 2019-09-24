<template>
  <Holder title="Todo"
class="ml-4">
    <div v-for="todo in todos"
:key="todo.id" dark>
      <CanEditRecord
        :is-editable="!todo.isEditable"
        :title="todo.description"
        @onInput="SET_TODO_DESCRIPTION({todo, description: $event})"
        @onEdit="SET_IS_EDITABLE(todo)"
        @onSave="saveTodo(todo)"
        @onDelete="deleteTodo(todo)"
      >
        <v-icon
          @click="checkClicked(todo)"
        >
{{ todo.accomplished ? 'check_box' : 'check_box_outline_blank' }}
</v-icon>
      </CanEditRecord>
    </div>
    <CreateRecord
      placeholder="I have to ...."
      :value="newTodoName"
      @onInput="SET_NEW_TODO_NAME"
      @create="createTodo"
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
  computed: {
    ...mapState('todos', ['todos', 'newTodoName'])
  },
  methods: {
    ...mapMutations('todos', [
      'SET_NEW_TODO_NAME',
      'SET_TODO_DESCRIPTION',
      'SET_IS_EDITABLE',
      'CAN_NOT_SET_TO_EDIT',
      'TOGGLE_COMPLETED'
    ]),
    ...mapActions('todos', ['createTodo', 'saveTodo', 'deleteTodo']),
    checkClicked(todo) {
      this.TOGGLE_COMPLETED(todo)
      this.saveTodo(todo)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

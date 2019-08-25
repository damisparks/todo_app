<template>
  <Holder title="Todo" class="ml-4">
    <div v-for="todo in todos" :key="todo.id" dark>
      <CanEditRecord
        :isEditable="!todo.isEditable"
        :title="todo.description"
        @onInput="SET_TODO_DESCRIPTION({todo, description: $event})"
        @onEdit="SET_IS_EDITABLE(todo)"
        @onSave="saveTodo(todo)"
        @onDelete="deleteTodo(todo)"
      />
    </div>
    <!--    @onClick="todoHasBeenCLicked(list)"  -->
    <CreateRecord
      placeholder="I have to ...."
      @onInput="SET_NEW_TODO_NAME"
      :value="newTodoName"
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
      'CAN_NOT_SET_TO_EDIT'
    ]),
    ...mapActions('todos', ['createTodo', 'saveTodo', 'deleteTodo'])
  }
}
</script>

<style lang="scss" scoped>
</style>
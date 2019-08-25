<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <ListView />
      </v-flex>
      <v-flex xs8 v-if="currentList">
        <Todo></Todo>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapGetters, mapState } from 'vuex'
import router from '../router'
import ListView from '@/components/ListView.vue'
import Todo from '@/components/Todo.vue'
// @ is an alias to /src

export default {
  components: {
    ListView,
    Todo
  },

  computed: {
    ...mapState('lists', ['currentList']),
    ...mapGetters('authenticate', ['isLoggedIn'])
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login')
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <ListView></ListView>
      </v-flex>
      <v-flex xs8>
        <Holder title="Todos" class="ml-4">
          <h1>Something</h1>
        </Holder>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '../router'
import ListView from '@/components/ListView.vue'
// @ is an alias to /src

export default {
  components: {
    ListView
  },

  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login')
    }
  },
  computed: {
    ...mapGetters('authenticate', ['isLoggedIn'])
  }
}
</script>

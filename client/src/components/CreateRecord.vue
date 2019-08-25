<template>
  <div>
    <v-layout class="mt-2">
      <v-flex xs8>
        <v-text-field
          :placeholder="placeholder"
          @input="$emit('onInput', $event)"
          single-line
          solo
          :value="value"
          @keyup.enter="$emit('create')"
        />
      </v-flex>
      <v-flex xs4>
        <v-btn
          class="ma-2"
          @click="$emit('create')"
          color="primary"
          @keypress.enter="$emit('create')"
        >
          <v-icon dark>add_circle</v-icon>Create
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'value']
}
</script>

<style lang="scss" scoped>
</style>
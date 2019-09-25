<template>
  <div>
    <v-layout
row
              wrap
>
      <v-flex
xs9
              class="text-left pl-4"
>
        <slot />
        <span
v-if="isEditable"
              @click="$emit('onClick')"
>{{ title }}</span>

        <v-text-field
          v-if="!isEditable"
          autofocus
          :value="title"
          @keyup.enter="$emit('onSave')"
          @input="$emit('onInput', $event)"
        />
        </slot>
      </v-flex>
      <v-flex xs3>
        <v-icon
v-if="isEditable"
                @click="$emit('onEdit')"
>
          edit
        </v-icon>
        <v-icon
v-if="!isEditable"
                @click="$emit('onSave')"
>
          check_circle
        </v-icon>
        <v-icon @click="$emit('onDelete')">
          delete
        </v-icon>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['isEditable', 'title', 'record']
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <v-tooltip v-bind="props" v-model="visible" class="rc-tooltip p0">
    <template #activator="binds">
      <v-btn
        v-bind="binds.props"
        class="rc-tooltip-activator-btn"
        icon
        size="small"
        @keyup.esc="() => (visible = false)"
      >
        <slot name="activator">
          <v-icon icon="$tooltip" size="small" class="rc-tooltip--label-icon" />
        </slot>
      </v-btn>
    </template>

    <template #default>
      <slot name="default">
        <v-card>
          <slot name="title">
            <v-card-title v-if="title" class="text-body-2">{{ title }}</v-card-title>
          </slot>
          <slot name="description">
            <v-card-text v-if="description" class="text-body-2 mt-1">{{
              description
            }}</v-card-text>
          </slot>
        </v-card>
      </slot>
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import './style.scss'
import { TooltipProps } from './type'

const visible = ref<boolean>(false)

const props = withDefaults(defineProps<TooltipProps>(), {
  title: undefined,
  description: undefined,
  maxWidth: 270,
  contained: false,
})
</script>

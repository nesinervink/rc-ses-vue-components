<template>
  <v-tooltip class="rc-tooltip p0" v-bind="props" :close-on-content-click="true">
    <template #activator="binds">
      <slot name="activator" v-bind="binds">
        <v-icon
          v-bind="binds.props"
          icon="$tooltip"
          size="small"
          class="rc-tooltip-label-icon ml-2"
        />
      </slot>
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
import './style.scss'
import { TooltipProps } from './type'

const props = withDefaults(defineProps<TooltipProps>(), {
  title: undefined,
  description: undefined,
  maxWidth: 270,
  contained: false,
})
</script>

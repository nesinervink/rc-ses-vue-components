<template>
  <div class="rc-field-wrapper">
    <div v-if="label || description" class="rc-field-labels">
      <div class="rc-field-label-title">
        <label
          v-if="label"
          :for="props.for"
          class="text-subtitle-1 text-md-body-2 font-weight-medium"
        >
          {{ label }}
          <span v-if="required" class="text-error">*</span>
        </label>

        <RcSesTooltip
          v-if="tooltip"
          icon-class="rc-tooltip-mobile"
          :title="tooltipTitle"
          :description="tooltip"
          location="top"
          :open-on-click="tooltipOnClick"
          :open-on-focus="tooltipOnClick"
          :open-on-hover="!tooltipOnClick"
        >
          <template #activator>
            <v-icon
              icon="$tooltip"
              size="small"
              class="rc-tooltip-label-icon rc-tooltip-mobile"
            />
          </template>
        </RcSesTooltip>
      </div>
      <label
        v-if="description"
        :for="props.for"
        class="text-subtitle-2 rc-field-description"
      >
        {{ description }}
      </label>
    </div>

    <div
      class="rc-field-content"
      :class="{ 'rc-field-content--variant-outlined': variant === 'outlined' }"
    >
      <slot />
      <RcSesTooltip
        v-if="tooltip"
        icon-class="rc-tooltip-desktop"
        :title="tooltipTitle"
        :description="tooltip"
        :open-on-click="tooltipOnClick"
        :open-on-focus="tooltipOnClick"
        :open-on-hover="!tooltipOnClick"
      >
        <template #activator>
          <v-icon
            icon="$tooltip"
            size="small"
            class="rc-tooltip-input-icon rc-tooltip-desktop"
          />
        </template>
      </RcSesTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import RcSesTooltip from '@/components/common/tooltip/RcSesTooltip.vue'

import './style.scss'

type Props = {
  label?: string
  description?: string
  for?: string
  variant?: 'text' | 'outlined'
  tooltip?: string
  tooltipTitle?: string
  tooltipOnClick?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  for: undefined,
  variant: 'text',
  tooltip: undefined,
  tooltipTitle: undefined,
  tooltipOnClick: false,
  required: false,
})
</script>

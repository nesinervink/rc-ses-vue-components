<template>
  <RcSesFieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :tooltip-on-click="fieldTooltipOnClick"
    :for="name"
    :required="required"
  >
    <RcSesDatePicker
      v-model="model"
      v-bind="$attrs"
      :range="range"
      :max-width="maxWidth"
      :placeholder="placeholder"
      :name="name"
      :error="error"
      :disabled="disabled"
      :readonly="readonly"
    >
      <template v-if="$slots['append-inner']" #append-inner="binds">
        <slot name="append-inner" v-bind="binds" />
      </template>
      <template v-if="$slots['clear']" #clear="binds">
        <slot name="clear" v-bind="binds" />
      </template>
      <template v-if="$slots['counter']" #counter="binds">
        <slot name="counter" v-bind="binds" />
      </template>
      <template v-if="$slots['loader']" #loader="binds">
        <slot name="loader" v-bind="binds" />
      </template>
      <template v-if="$slots['prepend']" #prepend="binds">
        <slot name="prepend" v-bind="binds" />
      </template>
      <template v-if="$slots['prepend-inner']" #prepend-inner="binds">
        <slot name="prepend-inner" v-bind="binds" />
      </template>
    </RcSesDatePicker>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import RcSesDatePicker from '@/components/common/inputs/Datepickers/DatePicker/RcSesDatePicker.vue'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'

import { DatePickerFieldProps } from './types'

defineOptions({
  inheritAttrs: false,
})

defineProps<DatePickerFieldProps>()
const model = defineModel<any>()
</script>

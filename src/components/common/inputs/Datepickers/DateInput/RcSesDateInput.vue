<template>
  <RcSesTextField
    ref="dateInputRef"
    v-bind="{ ...props, ...attrs }"
    v-model="displayDate"
    v-maska="{
      mask: computedMask,
    }"
    @click="handleClick"
    @change="handleChange"
  >
    <template v-if="$slots['append']" #append="binds">
      <slot name="append" v-bind="binds" />
    </template>
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
  </RcSesTextField>
</template>

<script setup lang="ts">
import { format, isValid } from 'date-fns'
import { vMaska } from 'maska/vue'
import { computed, ref, useAttrs } from 'vue'

import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'

import { DateInputProps } from './type'

const props = defineProps<DateInputProps>()
const attrs = useAttrs()
const modelValue = defineModel<any>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const dateInputRef = ref<any | null>(null)

const computedMask = computed(() => {
  return props.range ? '####-##-##  →  ####-##-##' : '####-##-##'
})

const displayDate = computed({
  get: () => {
    if (Array.isArray(modelValue.value)) {
      const start = format(modelValue.value[0], 'yyyy-MM-dd')
      const end = format(modelValue.value[1], 'yyyy-MM-dd')

      return `${start}  →  ${end}`
    }

    return modelValue.value instanceof Date ? format(modelValue.value, 'yyyy-MM-dd') : ''
  },
  set: () => {},
})

const handleChange = (input: any) => {
  if (props.range) {
    const [start, end] = input.target.value.split('  →  ')
    if (isValid(new Date(start)) && isValid(new Date(end))) {
      const newValue = [new Date(start), new Date(end)]
      modelValue.value = newValue
      emits('update:modelValue', newValue)
    }
  } else {
    const newDate = new Date(input.target.value)
    if (isValid(newDate)) {
      modelValue.value = newDate
      emits('update:modelValue', newDate)
    }
  }
}

const switchStateByPosition = (clickPosition: number, input: HTMLInputElement | null) => {
  input?.setSelectionRange(0, 0)
  input?.focus()

  if (clickPosition > 0 && clickPosition < 35) {
    input?.setSelectionRange(0, 4)
    input?.focus()
  } else if (clickPosition > 35 && clickPosition < 55) {
    input?.setSelectionRange(5, 7)
    input?.focus()
  } else if (clickPosition > 55 && clickPosition < 95) {
    input?.setSelectionRange(8, 10)
    input?.focus()
  } else if (clickPosition > 115 && clickPosition < 152) {
    input?.setSelectionRange(15, 19)
    input?.focus()
  } else if (clickPosition > 152 && clickPosition < 180) {
    input?.setSelectionRange(20, 22)
    input?.focus()
  } else if (clickPosition > 180 && clickPosition < 205) {
    input?.setSelectionRange(23, 25)
    input?.focus()
  }
}

const handleClick = (event: MouseEvent) => {
  if (!dateInputRef.value) return

  const input = dateInputRef.value.$el.querySelector('input')
  if (!input) return

  const clickPosition = event.clientX - input.getBoundingClientRect().left

  switchStateByPosition(clickPosition, input)
}
</script>

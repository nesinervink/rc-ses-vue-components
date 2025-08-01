<template>
  <div class="rc-number-stepper" :class="stepperClasses">
    <v-text-field
      :id="name"
      v-model="model"
      class="rc-field"
      :disabled="disabled"
      :focused="focused"
      :readonly="readonly"
      :hide-details="true"
      :error="undefined"
      :max-width="maxWidth"
      @input="handleInput"
      @blur="onBlur"
      @focus="onFocus"
    >
      <template #append>
        <v-btn
          class="minus bg-grey-100"
          :readonly="readonly"
          @click="minusClick"
          @blur="onBlur"
          @focus="onFocus"
        >
          <v-icon icon="$minus"></v-icon>
        </v-btn>
        <v-btn
          class="plus bg-grey-100"
          :readonly="readonly"
          @click="plusClick"
          @blur="onBlur"
          @focus="onFocus"
        >
          <v-icon icon="$plus"></v-icon>
        </v-btn>
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
    </v-text-field>
    <RcSesError v-if="error">{{ error }}</RcSesError>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, withDefaults } from 'vue'

import RcSesError from '@/components/common/Error/RcSesError.vue'
import { NumberStepperProps } from '@/components/common/inputs/NumberSteppers/NumberStepper/type'

import './style.scss'

const props = withDefaults(defineProps<NumberStepperProps>(), {
  max: Infinity,
  min: -Infinity,
  step: 1,
})

const focused = ref<boolean>(false)
const model = defineModel<number | string>()
model.value = props.min

const roundToStep = (value: number, step: number) => {
  const roundedValue = Math.round(value / step) * step

  // Avoid floating point precision issues
  return parseFloat(roundedValue.toFixed(10))
}

const handleInput = (event: InputEvent) => {
  const input = (event.target as HTMLInputElement).value
  const numericValue = parseFloat(input)
  if (!Number.isNaN(numericValue)) {
    model.value = numericValue
  } else {
    // Keep the input value as string if not a number
    model.value = input
  }
}

const getValueInRange = (value: number) => {
  return Math.max(Math.min(value, props.max), props.min)
}

const onBlur = () => {
  if (typeof model.value === 'number') {
    model.value = getValueInRange(model.value)
  } else {
    model.value = props.min
  }
  focused.value = false
}

const onFocus = () => {
  focused.value = true
}

const minusClick = () => {
  if (typeof model.value === 'number') {
    const newValue = model.value - props.step
    model.value = getValueInRange(roundToStep(newValue, props.step))
  }
}

const plusClick = () => {
  if (typeof model.value === 'number') {
    const newValue = model.value + props.step
    model.value = getValueInRange(roundToStep(newValue, props.step))
  }
}

const stepperClasses = computed(() => {
  return {
    'rc-focused': focused.value,
    'rc-error': !!props.error,
    'rc-readonly': props.readonly,
    'rc-disabled': props.disabled,
  }
})
</script>

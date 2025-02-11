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
    <v-textarea
      v-bind="$attrs"
      id="id"
      v-model="model"
      class="rc-field rc-textarea-field"
      variant="outlined"
      :error="!!error"
      :hide-details="!(!!error || !!counter || !!messages)"
      :error-messages="error"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :counter="counter"
      :name="name"
      :messages="messages"
      :max-width="maxWidth"
      :active="active"
      :append-icon="appendIcon"
      :append-inner-icon="appendInnerIcon"
      :autofocus="autofocus"
      :base-color="baseColor"
      :bg-color="bgColor"
      :center-affix="centerAffix"
      :clearable="clearable"
      :clear-icon="clearIcon"
      :direction="direction"
      :dirty="dirty"
      :flat="flat"
      :focused="focused"
      :hint="hint"
      :loading="loading"
      :max-errors="maxErrors"
      :min-width="minWidth"
      :persistent-clear="persistentClear"
      :persistent-counter="persistentCounter"
      :persistent-hint="persistentHint"
      :persistent-placeholder="persistentPlaceholder"
      :prefix="prefix"
      :prepend-icon="prependIcon"
      :prepend-inner-icon="prependInnerIcon"
      :reverse="reverse"
      :single-line="singleLine"
      :suffix="suffix"
      :theme="theme"
      :tile="tile"
      :validate-on="validateOn"
      :validation-value="validationValue"
      :width="width"
      :auto-grow="autoGrow"
      :rows="rows"
      :max-rows="maxRows"
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

      <slot name="default" />
    </v-textarea>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { VTextarea } from 'vuetify/components/VTextarea'

import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'

import { TextAreaFieldProps } from './type'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextAreaFieldProps>(), {})

const model = defineModel<any>()

watch(
  () => props.value,
  (newValue) => {
    model.value = newValue
  },
  { immediate: true },
)
</script>

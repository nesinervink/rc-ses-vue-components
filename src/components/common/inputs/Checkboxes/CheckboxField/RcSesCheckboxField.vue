<template>
  <RcSesFieldWrapper
    v-bind="fieldWrapperProps"
    class="rc-checkbox-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :tooltip-title="fieldTooltipTitle"
    :tooltip-on-click="fieldTooltipOnClick"
    :for="name"
    :required="required"
  >
    <v-card class="bg-grey-50" color="grey" variant="outlined">
      <RcSesCheckbox
        v-model="model"
        v-bind="$attrs"
        :label="label"
        :readonly="readonly"
        :error="undefined"
        :true-value="trueValue"
        :false-value="falseValue"
      >
        <template v-if="$slots.label" #label="labelProps">
          <slot name="label" v-bind="labelProps">{{ label }}</slot>
        </template>
      </RcSesCheckbox>
    </v-card>
    <RcSesError v-if="error">{{ error }}</RcSesError>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import RcSesError from '@/components/common/Error/RcSesError.vue'
import RcSesCheckbox from '@/components/common/inputs/Checkboxes/Checkbox/RcSesCheckbox.vue'
import CheckboxDefaults from '@/components/common/inputs/Checkboxes/Checkbox/defaults'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'

import './style.scss'
import { CheckboxFieldProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<CheckboxFieldProps>(), CheckboxDefaults)

const model = defineModel<boolean>()
</script>

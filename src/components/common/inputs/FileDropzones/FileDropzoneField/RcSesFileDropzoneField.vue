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
    <RcSesFileDropzone v-model="model" v-bind="props">
      <template v-if="$slots['content-description']" #content-description="binds">
        <slot name="content-description" v-bind="binds" />
      </template>
    </RcSesFileDropzone>
  </RcSesFieldWrapper>
</template>

<script setup lang="ts">
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesFileDropzone from '@/components/common/inputs/FileDropzones/FileDropzone/RcSesFileDropzone.vue'
import { FileDropzoneFieldProps } from '@/components/common/inputs/FileDropzones/FileDropzoneField/type'

const props = defineProps<FileDropzoneFieldProps>()

const model = defineModel<any>()
</script>

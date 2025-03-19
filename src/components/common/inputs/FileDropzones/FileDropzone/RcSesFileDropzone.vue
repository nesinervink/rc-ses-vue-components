<template>
  <div class="dropzone-wrapper">
    <div
      class="dropzone"
      v-bind="getRootProps()"
      :class="{
        isDragActive,
        'rc-disabled': restProps.disabled,
        'rc-error': error,
      }"
    >
      <input
        v-bind="getInputProps()"
        :name="name"
        :capture="capture"
        :webkitdirectory="webkitdirectory"
      />
      <div class="dropzone-content">
        <v-icon icon="$upload" class="mb-2" size="24" />
        <p class="text-subtitle-1 mb-1 font-weight-strong">
          {{ t('RcSesFileDropzone.label', { ns: 'components' }) }}
        </p>
        <p class="text-subtitle-2 font-italic">
          <slot name="content-description" v-bind="{ contentDescription }">
            {{ contentDescription }}
          </slot>
        </p>
      </div>
    </div>

    <v-list v-if="state.files.length > 0" class="files">
      <v-list-item
        v-for="(file, index) in state.files"
        :key="index"
        class="file-item"
        rounded
      >
        <template #append>
          <v-icon
            class="icon-delete"
            icon="$delete"
            size="20"
            @click="handleClickDeleteFile(index)"
          />
        </template>
        <v-list-item-title class="text-subtitle-1">{{ file.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <RcSesError v-if="error">{{ error }}</RcSesError>
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { reactive, toRef } from 'vue'
import { FileRejectReason, useDropzone } from 'vue3-dropzone'

import RcSesError from '@/components/common/Error/RcSesError.vue'

import './style.scss'
import { FileDropzoneProps } from './type'

const { t } = useTranslation()

const model = defineModel<any[]>()
const props = defineProps<FileDropzoneProps>()

const error = toRef(props, 'error')

const state = reactive({
  files: [] as any[],
})

const {
  onDrop,
  getFilesFromEvent,
  name,
  contentDescription,
  capture,
  webkitdirectory,
  ...restProps
} = props as FileDropzoneProps

const filesFromEvent = getFilesFromEvent === undefined ? {} : { getFilesFromEvent }

function updateModel() {
  model.value = state.files
}

function onDropFile(acceptFiles: any[], rejectReasons: FileRejectReason[], event: Event) {
  state.files = acceptFiles
  updateModel()

  if (onDrop) {
    onDrop(acceptFiles, rejectReasons, event)
  }
}

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop: onDropFile,
  ...filesFromEvent,
  ...restProps,
})

function handleClickDeleteFile(index: number) {
  state.files.splice(index, 1)
  updateModel()
}
</script>

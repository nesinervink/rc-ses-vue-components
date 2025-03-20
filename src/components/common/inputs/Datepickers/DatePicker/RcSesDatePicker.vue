<template>
  <DatePicker
    ref="datepickerRef"
    v-model="modelValue"
    v-bind="props"
    :enable-time-picker="false"
    :week-start="1"
    :month-change-on-scroll="true"
    locale="lt"
    month-name-format="long"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :range="range"
    :multi-calendars="range ? 2 : 0"
    :auto-apply="false"
    :close-on-auto-apply="false"
    :teleport="false"
    :min-range="1"
    :hide-input-icon="false"
    menu-class-name="rc-datepicker-menu"
    input-class-name="rc-datepicker-input"
    class="rc-datepicker"
    :class="{ 'rc-datepicker--range': range }"
    :style="{ '--dp-max-width': maxWidth ? `${maxWidth}px` : '100%' }"
    @update:model-value="handleChange"
    @date-update="selectDate"
    @range-end="selectDate"
  >
    <template #dp-input="inputBind">
      <RcSesDateInput
        v-model="modelValue"
        v-bind="inputProps"
        :disabled="disabled"
        :placeholder="placeholder"
        :name="name"
        :max-width="maxWidth"
        :range="range"
        :readonly="inputBind.isMenuOpen"
        :error="error"
        v-on="{ ...inputEvents }"
        @click.stop=""
      >
        <template #prepend-inner="binds">
          <slot name="prepend-inner" v-bind="{ ...inputBind, ...binds }">
            <v-icon
              icon="$calendar"
              @click="inputBind.isMenuOpen ? inputBind.closeMenu() : inputBind.openMenu()"
            />
          </slot>
        </template>
        <template v-if="$slots['append']" #append="binds">
          <slot name="append" v-bind="{ ...inputBind, ...binds }" />
        </template>
        <template v-if="$slots['append-inner']" #append-inner="binds">
          <slot name="append-inner" v-bind="{ ...inputBind, ...binds }" />
        </template>
        <template v-if="$slots['clear']" #clear="binds">
          <slot name="clear" v-bind="{ ...inputBind, ...binds }" />
        </template>
        <template v-if="$slots['counter']" #counter="binds">
          <slot name="counter" v-bind="{ ...inputBind, ...binds }" />
        </template>
        <template v-if="$slots['loader']" #loader="binds">
          <slot name="loader" v-bind="{ ...inputBind, ...binds }" />
        </template>
        <template v-if="$slots['prepend']" #prepend="binds">
          <slot name="prepend" v-bind="{ ...inputBind, ...binds }" />
        </template>
      </RcSesDateInput>
    </template>

    <template #month-year="{ month, year, months, updateMonthYear }">
      <v-icon
        class="rc-datepicker-prev-icon"
        icon="rc-caret-double-left-bold"
        size="16"
        color="grey"
        @click="handleMonthYearChange(month, year - 1, updateMonthYear)"
      />
      <v-icon
        class="rc-datepicker-prev-icon"
        icon="rc-caret-left-bold"
        size="16"
        color="grey"
        @click="handleMonthYearChange((month ?? 0) - 1, year, updateMonthYear)"
      />
      <div class="text-body-1 flex-grow-1 text-center font-weight-strong">
        {{
          months && month !== undefined ? months.find((m) => m.value === month)?.text : ''
        }}
        {{ year }}
      </div>
      <v-icon
        class="rc-datepicker-next-icon"
        icon="rc-caret-right-bold"
        size="16"
        color="grey"
        @click="handleMonthYearChange((month ?? 0) + 1, year, updateMonthYear)"
      />
      <v-icon
        class="rc-datepicker-next-icon"
        icon="rc-caret-double-right-bold"
        size="16"
        color="grey"
        @click="handleMonthYearChange(month, year + 1, updateMonthYear)"
      />
    </template>

    <template #clear-icon="{ clear }">
      <XCircleFilledIcon color="grey-900" @click="clear" />
    </template>

    <template #arrow-left>
      <v-icon icon="$prev"></v-icon>
    </template>

    <template #arrow-right>
      <v-icon icon="$next" />
    </template>

    <template v-if="range" #action-preview>
      <v-btn variant="text" color="primary" class="text-body-2" @click="getThisWeek">
        {{ t('RcSesDatePicker.thisWeek', { ns: 'components' }) }}
      </v-btn>
      <v-btn variant="text" color="primary" class="text-body-2" @click="getThisMonth">
        {{ t('RcSesDatePicker.thisMonth', { ns: 'components' }) }}
      </v-btn>
      <v-btn variant="text" color="primary" class="text-body-2" @click="getLastMonth">
        {{ t('RcSesDatePicker.previousMonth', { ns: 'components' }) }}
      </v-btn>
    </template>

    <template #calendar-icon>
      <v-icon icon="$calendar" />
    </template>

    <template #action-buttons>
      <v-btn variant="text" color="primary" @click="closeDatepicker">{{
        t('RcSesDatePicker.close', { ns: 'components' })
      }}</v-btn>
    </template>
  </DatePicker>
</template>

<script setup lang="ts">
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useTranslation } from 'i18next-vue'
import { nextTick, ref } from 'vue'

import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import RcSesDateInput from '@/components/common/inputs/Datepickers/DateInput/RcSesDateInput.vue'
import { DatePickerProps } from '@/components/common/inputs/Datepickers/DatePicker/types'

import './style.scss'

const { t } = useTranslation()

const props = defineProps<DatePickerProps>()

const datepickerRef = ref<any>(null)
const modelValue = defineModel<any>()

const handleMonthYearChange = (month?: number, year?: number, updateMonthYear?: any) => {
  if (!updateMonthYear || month === undefined || year === undefined) {
    return
  }

  if (month < 0) {
    updateMonthYear(11, year - 1, true)
  } else if (month > 11) {
    updateMonthYear(0, year + 1, true)
  } else {
    updateMonthYear(month, year, true)
  }
}

const handleChange = (value: any) => {
  modelValue.value = value
}

const selectDate = () => {
  if (!datepickerRef.value) {
    return
  }

  nextTick(() => {
    datepickerRef.value.selectDate()
  })
}

const closeDatepicker = () => {
  if (datepickerRef.value) {
    datepickerRef.value.closeMenu()
  }
}

const getThisWeek = () => {
  const today = new Date()
  const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7))
  modelValue.value = [firstDay, lastDay]
}

const getThisMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  modelValue.value = [firstDay, lastDay]
}

const getLastMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0)
  modelValue.value = [firstDay, lastDay]
}
</script>

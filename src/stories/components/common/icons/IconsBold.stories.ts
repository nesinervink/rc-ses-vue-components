import { Meta, StoryFn } from '@storybook/vue3'

import {
  CaretDoubleLeftBoldIcon,
  CaretDoubleRightBoldIcon,
  CaretLeftBoldIcon,
  CaretRightBoldIcon,
  CheckBoldIcon,
  PencilSimpleLineBoldIcon,
} from '@/assets/icons/bold'

const icons = {
  PencilSimpleLineBoldIcon,
  CheckBoldIcon,
  CaretLeftBoldIcon,
  CaretRightBoldIcon,
  CaretDoubleLeftBoldIcon,
  CaretDoubleRightBoldIcon,
}

export default {
  title: 'components/common/Icons',
  component: PencilSimpleLineBoldIcon,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'number' },
  },
} as Meta

const Template: StoryFn = (args) => ({
  components: { ...icons },
  setup() {
    return { args, icons }
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 20px;">
      <div v-for="(component, name) in icons" :key="name" style="border-bottom: 1px solid #e0e0e0; padding-bottom: 20px;">
        <h3 style="margin-bottom: 16px; font-family: sans-serif;">{{ name }}</h3>
        <div style="display: flex; gap: 40px; align-items: center;">
          <div style="text-align: center;">
            <component :is="component" v-bind="args" />
            <p style="margin-top: 8px; font-size: 12px; color: #666;">Current Args</p>
          </div>
          <div style="text-align: center;">
            <component :is="component" :size="24" />
            <p style="margin-top: 8px; font-size: 12px; color: #666;">Size 24</p>
          </div>
          <div style="text-align: center;">
            <component :is="component" :size="48" color="primary" />
            <p style="margin-top: 8px; font-size: 12px; color: #666;">Size 48 Primary</p>
          </div>
        </div>
      </div>
    </div>
  `,
})

export const BoldIcons = Template.bind({})
BoldIcons.args = {
  size: 32,
  color: undefined,
}

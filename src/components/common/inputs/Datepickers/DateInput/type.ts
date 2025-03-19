import type { TextFieldProps } from '@/components/common/inputs/TextField/type'

export type DateInputProps = Omit<TextFieldProps, 'prependInnerIcon'> & {
  range?: boolean
}

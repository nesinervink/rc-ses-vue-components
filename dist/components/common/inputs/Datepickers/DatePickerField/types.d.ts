import { DatePickerProps } from '../DatePicker/types';
import { FieldProps, VeeField } from '../../../../../types/inputs/FieldProps';

export type DatePickerFieldProps = DatePickerProps & FieldProps & VeeField & {
    modelValue?: any;
    modelModifiers?: any;
};

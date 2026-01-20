import { ComponentFieldBindingObject, FieldBindingObject, FieldContext, FieldMeta } from 'vee-validate';

export type InputProps = {
    name?: string;
    error?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
};
export interface FieldProps {
    fieldLabel?: string;
    fieldDescription?: string;
    fieldTooltip?: string;
    fieldTooltipTitle?: string;
    fieldTooltipOnClick?: boolean;
    required?: boolean;
}
export type VeeField = {
    veeField?: VeeFieldType;
};
export interface VeeFieldType<TValue = unknown> extends Pick<FieldContext, 'validate' | 'resetField' | 'handleChange' | 'handleReset' | 'handleBlur' | 'setTouched' | 'setErrors' | 'setValue'> {
    field: FieldBindingObject<TValue>;
    componentField: ComponentFieldBindingObject<TValue>;
    value: TValue;
    meta: FieldMeta<TValue>;
    errors: string[];
    errorMessage: string | undefined;
    handleInput: FieldContext['handleChange'];
}

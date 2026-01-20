import { PhoneInputFieldProps, PhoneInputModel } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, ComputedRef, Ref, PropType } from 'vue';
import { VeeFieldType } from '../../../../types/inputs/FieldProps';

declare let __VLS_typeProps: PhoneInputFieldProps;
type __VLS_PublicProps = {
    modelValue?: PhoneInputModel | undefined;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    defaultIso: undefined;
    fieldLabel: undefined;
    fieldDescription: undefined;
    fieldTooltip: undefined;
    veeField: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: PhoneInputModel | undefined) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    defaultIso: undefined;
    fieldLabel: undefined;
    fieldDescription: undefined;
    fieldTooltip: undefined;
    veeField: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: PhoneInputModel | undefined) => any) | undefined;
}, {
    fieldLabel: string;
    fieldDescription: string;
    fieldTooltip: string;
    veeField: VeeFieldType<unknown>;
    defaultIso: string;
}, {}>, {
    append?(_: {
        id: ComputedRef<string>;
        messagesId: ComputedRef<string>;
        isDirty: ComputedRef<boolean>;
        isDisabled: ComputedRef<boolean>;
        isReadonly: ComputedRef<boolean>;
        isPristine: Ref<boolean>;
        isValid: ComputedRef<boolean | null>;
        isValidating: Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
    }): any;
    "append-inner"?(_: {
        isActive: Ref<boolean>;
        isFocused: Ref<boolean>;
        controlRef: Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
    }): any;
    clear?(_: {
        isActive: Ref<boolean>;
        isFocused: Ref<boolean>;
        controlRef: Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
        props: Record<string, any>;
    }): any;
    counter?(_: {
        counter: string;
        max: string | number | undefined;
        value: string | number | undefined;
    }): any;
    loader?(_: {
        color: string | undefined;
        isActive: boolean;
    }): any;
    prepend?(_: {
        id: ComputedRef<string>;
        messagesId: ComputedRef<string>;
        isDirty: ComputedRef<boolean>;
        isDisabled: ComputedRef<boolean>;
        isReadonly: ComputedRef<boolean>;
        isPristine: Ref<boolean>;
        isValid: ComputedRef<boolean | null>;
        isValidating: Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
    }): any;
}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

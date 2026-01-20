import { DateInputProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, ComputedRef, Ref, PropType } from 'vue';

declare let __VLS_typeProps: DateInputProps;
type __VLS_PublicProps = {
    modelValue?: any;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToOption<__VLS_PublicProps>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToOption<__VLS_PublicProps>>> & {
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
}, {}, {}>, {
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
    "prepend-inner"?(_: {
        isActive: Ref<boolean>;
        isFocused: Ref<boolean>;
        controlRef: Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
    }): any;
}>;
export default _default;
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

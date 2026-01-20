import { FileDropzoneFieldProps } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from 'vue';

declare let __VLS_typeProps: FileDropzoneFieldProps;
type __VLS_PublicProps = {
    modelValue?: any;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToOption<__VLS_PublicProps>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToOption<__VLS_PublicProps>>> & {
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
}, {}, {}>, {
    "content-description"?(_: {
        contentDescription: string | undefined;
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

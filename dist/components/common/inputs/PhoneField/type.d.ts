import { VeeField } from '../../../../types/inputs/FieldProps';
import { TextFieldProps } from '../TextField/type';

export interface PhoneInputCountry {
    name: string;
    code: string;
    iso: string;
    flag: string;
    mask: string;
}
export type PhoneInputFieldProps = Omit<TextFieldProps, 'placeholder'> & VeeField & {
    defaultIso?: string;
};
export type PhoneInputModel = {
    country: PhoneInputCountry | undefined;
    value?: string;
};

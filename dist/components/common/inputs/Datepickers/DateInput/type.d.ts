import { TextFieldProps } from '../../TextField/type';

export type DateInputProps = Omit<TextFieldProps, 'prependInnerIcon'> & {
    range?: boolean;
};

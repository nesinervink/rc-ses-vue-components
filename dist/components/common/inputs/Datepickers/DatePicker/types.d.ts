import { TextFieldProps } from '../../TextField/type';
import { InputProps } from '../../../../../types/inputs/FieldProps';
import { InputEvents } from '../../../../../types/inputs/InputEvents';

export type DatePickerProps = InputProps & {
    range?: boolean;
    maxWidth?: number;
    inputProps?: TextFieldProps;
    inputEvents?: InputEvents;
};

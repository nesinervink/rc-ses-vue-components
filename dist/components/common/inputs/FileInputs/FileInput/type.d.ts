import { VFileInput } from 'vuetify/components';
import { InputProps } from '../../../../../types/inputs/FieldProps';

export type FileInputProps = InputProps & {
    active?: VFileInput['$props']['active'];
    appendIcon?: VFileInput['$props']['appendIcon'];
    appendInnerIcon?: VFileInput['$props']['appendInnerIcon'];
    baseColor?: VFileInput['$props']['baseColor'];
    bgColor?: VFileInput['$props']['bgColor'];
    centerAffix?: VFileInput['$props']['centerAffix'];
    chips?: VFileInput['$props']['chips'];
    clearable?: VFileInput['$props']['clearable'];
    clearIcon?: VFileInput['$props']['clearIcon'];
    counter?: VFileInput['$props']['counter'];
    counterSizeString?: VFileInput['$props']['counterSizeString'];
    counterString?: VFileInput['$props']['counterString'];
    density?: VFileInput['$props']['density'];
    direction?: VFileInput['$props']['direction'];
    dirty?: VFileInput['$props']['dirty'];
    flat?: VFileInput['$props']['flat'];
    focused?: VFileInput['$props']['focused'];
    hideSpinButtons?: VFileInput['$props']['hideSpinButtons'];
    hint?: VFileInput['$props']['hint'];
    id?: VFileInput['$props']['id'];
    loading?: VFileInput['$props']['loading'];
    maxErrors?: VFileInput['$props']['maxErrors'];
    maxWidth?: VFileInput['$props']['maxWidth'];
    messages?: VFileInput['$props']['messages'];
    minWidth?: VFileInput['$props']['minWidth'];
    multiple?: VFileInput['$props']['multiple'];
    persistentClear?: VFileInput['$props']['persistentClear'];
    persistentHint?: VFileInput['$props']['persistentHint'];
    prependIcon?: VFileInput['$props']['prependIcon'];
    prependInnerIcon?: VFileInput['$props']['prependInnerIcon'];
    readonly?: VFileInput['$props']['readonly'];
    reverse?: VFileInput['$props']['reverse'];
    rules?: VFileInput['$props']['rules'];
    showSize?: VFileInput['$props']['showSize'];
    singleLine?: VFileInput['$props']['singleLine'];
    theme?: VFileInput['$props']['theme'];
    tile?: VFileInput['$props']['tile'];
    validateOn?: VFileInput['$props']['validateOn'];
    validationValue?: VFileInput['$props']['validationValue'];
    width?: VFileInput['$props']['width'];
};

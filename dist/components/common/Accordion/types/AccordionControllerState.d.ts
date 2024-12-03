export type AccordionState = {
    disabled?: boolean | undefined;
    expanded?: boolean | undefined;
    state: 'active' | 'completed' | 'error' | 'pending';
    title: string;
    onClick?: (item: AccordionState) => void;
};
export type AccordionProps = {
    id: string;
    disabled?: boolean | undefined;
    expanded?: boolean | undefined;
    state?: 'active' | 'completed' | 'error' | 'pending';
    title?: string;
};
export type AccordionControllerState = Record<string, AccordionState>;

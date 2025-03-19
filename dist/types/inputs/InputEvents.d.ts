export type InputEvents = {
    focus?: (event: FocusEvent) => void;
    blur?: (event: FocusEvent) => void;
    click?: (event: MouseEvent) => void;
    dblclick?: (event: MouseEvent) => void;
    mousedown?: (event: MouseEvent) => void;
    mouseup?: (event: MouseEvent) => void;
    keydown?: (event: KeyboardEvent) => void;
    keyup?: (event: KeyboardEvent) => void;
    input?: (event: Event) => void;
    change?: (event: Event) => void;
    compositionstart?: (event: CompositionEvent) => void;
    compositionend?: (event: CompositionEvent) => void;
    paste?: (event: ClipboardEvent) => void;
    copy?: (event: ClipboardEvent) => void;
};

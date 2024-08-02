type DropdownPropOption = {
    id: string;
    value: string;
    label: string;
    highlightedLabel?: any;
};
type DropdownProps = {
    id: string;
    multiple: boolean;
    search: boolean;
    options: DropdownPropOption[];
    selectedOptions: string[];
    optionLabel?: string;
    inputLabel?: string;
    onChange?: Function;
};
declare const Dropdown: ({ multiple, search, options, selectedOptions, optionLabel, inputLabel, onChange }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;

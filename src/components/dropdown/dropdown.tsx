import { Input, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';

import { BaseSyntheticEvent, useEffect, useState } from 'react';

type DropdownPropOption = {
    id: string;
    value: string;
    label: string;
    highlightedLabel?: any;
}
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

const Dropdown = ({ multiple = false, search = false, options, selectedOptions = [], optionLabel, inputLabel, onChange }: DropdownProps) => {
    const optionLabelProp = (optionLabel && options[0].hasOwnProperty(optionLabel) ? optionLabel : 'label') as keyof DropdownPropOption;

    const initialOptionState: any[] = [...options];
    const initialSelectedState: DropdownPropOption[] = Array.isArray(selectedOptions) && selectedOptions.length > 0 ?
        initialOptionState.filter((opt: DropdownPropOption) => selectedOptions.includes(opt.id)) : [];
    const [selected, setSelected] = useState(initialSelectedState);
    const [optionItems, setOptions] = useState(initialOptionState);
    const [searchInputValue, setSearchValue] = useState('');

    useEffect(() => {
        setSelected(validateOptions(initialOptionState.filter((opt: DropdownPropOption) => selectedOptions.includes(opt.id))));
    }, [selectedOptions])

    useEffect(() => {
        setSelected([]);
    }, [multiple])

    useEffect(() => {
        setSelected(validateOptions(initialOptionState.filter((opt: DropdownPropOption) => selectedOptions.includes(opt.id))));
    }, [options])


    /**
     * This function to validate if the option is currently in the options prop
     *
     * @param {Array} currentOptions the object option being selected
     */
    const validateOptions = (currentOptions: DropdownPropOption[]): DropdownPropOption[] => {
        return currentOptions.filter((currentOpt: DropdownPropOption) => options.some((opt: DropdownPropOption) => currentOpt.id == opt.id))
    }

    /**
     * This function handles selection of option(s)
     *
     * @param {object} opt the object option being selected
     */
    const handleSelect = (opt: DropdownPropOption): void => {
        let alreadySelected = selected.find((selectedOpt: DropdownPropOption) => selectedOpt.id === opt.id);
        let allSelected = multiple ? [...selected, ...(alreadySelected ? [] : [opt])] : [opt];
        setSelected(allSelected);
        if (onChange) onChange();
    }

    /**
     * This function handles removal of selected option(s)
     *
     * @param {object} opt the object option being removed
     */
    const handleRemoveSelection = (e: BaseSyntheticEvent, opt: DropdownPropOption): void => {
        e.stopPropagation();
        let allSelected = [...selected].filter((selectedOpt: DropdownPropOption) => selectedOpt.id !== opt.id);
        setSelected(allSelected);
        if (onChange) onChange();
    }

    /**
    * This function handles change on search input
    *
    * @param {string} value input search value
    */

    const handleSearchInputChange = (value: string): void => {
        setSearchValue(value);
        let filteredItems = [...initialOptionState].filter((opt) => opt[optionLabelProp].includes(value));
        const items = [...filteredItems].map((opt: any) => {
            let label: string = opt[optionLabelProp];
            opt.highlightedLabel = label.replace(new RegExp(value + '(?!([^<]+)?<)', 'gi'),
                "<mark class='!bg-teal-400'>$&</mark>");
            return opt;
        });
        setOptions(items);
    }

    /**
    * This function handles menu click
    */
    const handleMenuClick = (): void => {
        const items = [...initialOptionState].map((opt: any) => {
            opt.highlightedLabel = opt[optionLabelProp];
            return opt;
        });
        setOptions(items);
        setSearchValue('');
    }
    /**
    * This function handles remove search value
    */
    const handleSearchRemove = (): void => {
        setSearchValue('');
        handleSearchInputChange('');
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-6 gap-3'>
            <div className='w-full col-span-1 text-left text-gray-600 text-sm break-words pr-4 pl-2 py-2 font-semibold align-middle'>{inputLabel}</div>
            <Menu as='div' className={`${inputLabel ? 'col-span-5' : 'col-span-6'} w-full relative inline-block text-left pt-0 content-center`}>
                <MenuButton onClick={handleMenuClick} className='top-0 inline-flex w-full flex text-left h-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none'>
                    <div className='w-full truncate'>
                        {multiple ? selected.map((opt) => (
                            <span key={opt.id} className='truncate rounded-full font-light mr-1 inline-flex border-transparent items-center bg-gray-100 px-2 py-0 text-xs text-gray-600'>
                                {opt[optionLabelProp]}
                                <XCircleIcon className='pl-2 h-6 w-6 text-gray-500' onClick={(e) => handleRemoveSelection(e, opt)}></XCircleIcon>
                            </span>
                        )) : <span className='font-light text-gray-600'>{selected[0]?.[optionLabelProp] || ''}</span>}
                    </div>

                    <ChevronDownIcon aria-hidden='true' className='-mr-1 h-5 content-center text-gray-500 object-right' />
                </MenuButton>

                <MenuItems
                    className='absolute w-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                >
                    {search && <div className='relative  border border-gray-100 border-t-transparent border-r-transparent border-l-transparent'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <MagnifyingGlassIcon className='size-4 text-slate-400'></MagnifyingGlassIcon>
                        </div>
                        <Input type='text' id='search-input' className='block w-full px-3 py-2 ps-10 pe-8 text-sm font-light text-gray-600 focus:outline-none rounded-t-lg dark:text-white'
                            placeholder='Search items' autoComplete='off' onChange={(e) => handleSearchInputChange(e.target.value)} value={searchInputValue}></Input>
                        {searchInputValue &&
                            <XCircleIcon className='absolute inset-y-0 end-2 flex items-center cursor-pointer ps-3 size-7 mt-1 text-gray-500 text-slate-400' onClick={handleSearchRemove}></XCircleIcon>
                        }

                    </div>}
                    <div className='py-0'>
                        {optionItems.map((opt: DropdownPropOption, index: number) => (
                            <MenuItem className='data-[focus]:bg-emerald-50 data-[focus]:text-gray-900' as='div' key={index} onClick={() => handleSelect(opt)}>
                                <div className='block px-4 py-2 text-sm text-gray-700 font-light'>
                                    <div dangerouslySetInnerHTML={
                                        { __html: (opt.highlightedLabel || opt[optionLabelProp]) }
                                    } />
                                </div>
                            </MenuItem>
                        ))}
                    </div>
                </MenuItems>
            </Menu>
        </div>

    )
}

export default Dropdown;
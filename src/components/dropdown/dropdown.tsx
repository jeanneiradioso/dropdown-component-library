import { Input, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

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

export const Dropdown = ({ multiple, search, options, selectedOptions = [], optionLabel, inputLabel, onChange }: DropdownProps) => {
    const optionLabelProp = optionLabel && options[0].hasOwnProperty(optionLabel) ? optionLabel : 'label';

    const initialOptionState: DropdownPropOption[] = [...options];
    const initialSelectedState: DropdownPropOption[] = Array.isArray(selectedOptions) ?
        initialOptionState.filter((opt: DropdownPropOption) => selectedOptions.includes(opt.id)) : [];

    const [selected, setSelected] = useState(initialSelectedState);
    const [selectedOptionIds, setSelectedOptionids] = useState(selectedOptions);
    const [optionItems, setOptions] = useState(initialOptionState);
    const [searchInputValue, setSearchValue] = useState('');

    useEffect(() => {
        setSelected(validateOptions(initialOptionState.filter((opt: DropdownPropOption) => selectedOptions.includes(opt.id))));
    }, [selectedOptions])

    /**
     * This function to validate if the option is currently in the options prop
     *
     * @param {object} opt the object option being selected
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
        setSelectedOptionids([...allSelected].map((option: DropdownPropOption) => option.id));
        setSelected(allSelected);
        if(onChange) onChange();
    }

    /**
     * This function handles removal of selected option(s)
     *
     * @param {object} opt the object option being removed
     */
    const handleRemoveSelection = (e: BaseSyntheticEvent, opt: DropdownPropOption): void => {
        e.stopPropagation();
        setSelected([...selected].filter((selectedOpt: DropdownPropOption) => selectedOpt.id !== opt.id));
        if(onChange) onChange();
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
        <div className='flex'>
            <div className={`${inputLabel ? 'w-1/6' : ''}`}>{inputLabel}</div>
            <Menu as='div' className={`${inputLabel ? 'w-5/6' : 'w-full'} relative inline-block text-left pt-0`}>
                <div>
                    <MenuButton onClick={handleMenuClick} className='inline-flex w-full flex text-left gap-x-5.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                        <div className='w-full'>
                            {multiple ? selected.map((opt) => (
                                <span key={opt.id} className='rounded-full mr-1 inline-flex border-transparent items-center bg-gray-50 px-2 py-0 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
                                    {opt[optionLabelProp]}
                                    <XCircleIcon className='pl-2 h-6 w-6 text-gray-500' onClick={(e) => handleRemoveSelection(e, opt)}></XCircleIcon>
                                </span>
                            )) : <span className='font-normal'>{selected[0]?.label || ''}</span>}
                        </div>

                        <ChevronDownIcon aria-hidden='true' className='-mr-1 h-5 text-gray-500 object-right' />
                    </MenuButton>
                </div>

                <MenuItems
                    className='absolute w-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                >
                    {search && <div className='relative  border border-gray-100 border-t-transparent border-r-transparent border-l-transparent'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <MagnifyingGlassIcon className='size-4 text-slate-400'></MagnifyingGlassIcon>
                        </div>
                        <Input type='text' id='search-input' className='block w-full px-3 py-2 ps-10 pe-8 text-sm text-gray-900 focus:outline-none rounded-t-lg dark:text-white'
                            placeholder='Search items' autoComplete='off' onChange={(e) => handleSearchInputChange(e.target.value)} value={searchInputValue}></Input>
                        {searchInputValue &&
                            <XCircleIcon className='absolute inset-y-0 end-2 flex items-center cursor-pointer ps-3 size-7 mt-1 text-gray-500 text-slate-400' onClick={handleSearchRemove}></XCircleIcon>
                        }

                    </div>}
                    <div className='py-0'>
                        {optionItems.map((opt: DropdownPropOption, index: number) => (
                            <MenuItem className='data-[focus]:bg-emerald-50 data-[focus]:text-gray-900' as='div' key={index} onClick={() => handleSelect(opt)}>
                                <div className='block px-4 py-2 text-sm text-gray-700'>
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
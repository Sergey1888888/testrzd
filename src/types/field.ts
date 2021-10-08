import React from "react";
import {DropdownItemProps} from "semantic-ui-react";

export interface ISelectField {
    label: React.ReactNode;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>, {value}: any) => void;
    onBlur: () => void;
    value: string;
    options: DropdownItemProps[];
    placeholder: string;
    selectOnBlur: boolean;
    error: boolean;
}

export interface ISelectFieldProp {
    label: React.ReactNode;
    input: {
        name: string;
        onChange: (e: string | number | boolean | (string | number | boolean)[] | undefined) => void;
        onBlur: () => void;
        value: string;
    };
    meta: {
        touched: boolean;
        error: string;
        warning: string;
    }
    options: DropdownItemProps[];
    placeholder: string;
}

export interface IDateInputField {
    label: React.ReactNode;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>, {value}: any) => void;
    onBlur: () => void;
    value: string;
    placeholder: string;
    localization: string;
    error: boolean;
}

export interface IDateInputFieldProp {
    label: React.ReactNode;
    input: {
        name: string;
        onChange: (value: string | number | boolean | (string | number | boolean)[] | undefined) => void;
        onBlur: () => void;
        value: string;
    };
    meta: {
        touched: boolean;
        error: string;
        warning: string;
    }
    placeholder: string;
}

export interface IInputField {
    label: React.ReactNode;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>, {value}: any) => void;
    onBlur: () => void;
    value: string
    placeholder: string;
    error: boolean;
    type: string;
}

export interface IInputFieldProp {
    label: React.ReactNode;
    input: {
        name: string;
        onChange: (value: string | number | boolean | (string | number | boolean)[] | undefined) => void;
        onBlur: () => void;
        value: string;
    };
    meta: {
        touched: boolean;
        error: string;
        warning: string;
    }
    placeholder: string;
    type: string;
}

export interface ICheckboxFieldProp {
    label: React.ReactNode;
    input: {
        checked: boolean;
        name: string;
        onChange: (value: string | number | boolean | (string | number | boolean)[] | undefined) => void;
        value: boolean;
    };
    meta: {
        touched: boolean;
        error: string;
        warning: string;
    }
    defaultValue: boolean;
}
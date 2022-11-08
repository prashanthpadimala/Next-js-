import { Autocomplete, Box, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

interface IContainerProps {
    data: Array<string> | any,
    selectLabel?: string
    value?: any
    disabled?: boolean
    onChange?: any
    onBlur?: any
    isEdit?: boolean
    id?: string
    complete?: boolean
    required?: boolean
    multiple?: boolean
    isError?: boolean
    placeholder?: string
    helperText?: string,
    defaultValue?: any
}

// export default function SingleSelect(props: IContainerProps) {
const Dropdown: React.FC<IContainerProps> = (props) => {
    const { value, data, disabled, onChange, isEdit, id, complete, required, selectLabel, multiple, isError, placeholder, onBlur, helperText, defaultValue } = props;
    const onBlurHandle = (e: any) => {
        if (onBlur) {
            onBlur(e)
        }
    }
    const onChangeHandle = (e: any) => {
        if (onChange) {
            onChange(e);
        }
    }
    return (
        <Box component={'div'}>
            <Autocomplete
                // disablePortal
                defaultValue={defaultValue}
                value={defaultValue}
                id="Autocomplete"
                options={data}
                disabled={disabled}
                multiple={multiple}
                onChange={(e: any) => { onChangeHandle(e) }}
                onBlur={(e: any) => { onBlurHandle(e) }}
                renderInput={(params) => <TextField
                    helperText={isError ? helperText : ''}
                    error={isError}
                    variant="filled"
                    {...params}
                    placeholder={placeholder}
                    label={selectLabel}
                />}
            />
        </Box >
    )
}

Dropdown.defaultProps = {
    data: [],
    multiple: false,
    value: "",
    disabled: false,
    onChange: () => { return null },
    isEdit: false,
    id: "",
    complete: false,
    required: false,
    selectLabel: '',
    isError: false,
    placeholder: '',
    helperText: "",
    defaultValue: undefined
}

export default Dropdown;

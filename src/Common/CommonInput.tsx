import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState, forwardRef, ForwardRefRenderFunction, PropsWithChildren } from 'react'

interface IContainerProps {
    inputLabel: string
    value?: any
    disabled?: boolean
    isEdit?: boolean
    onChange?: any
    onBlur?: any
    inputType: string
    maxLength?: number
    required?: boolean
    placeholder?: string
    isError?: boolean
    helperText?: string
    showEye?: boolean
    fieldColor?: any
    onKeyDown?: any
}
const TextInputField: ForwardRefRenderFunction<HTMLDivElement, PropsWithChildren<IContainerProps>> = (
    props,
    ref,
) => {
    const { inputLabel, onKeyDown, showEye, value, placeholder, disabled, inputType, maxLength, isEdit, isError, helperText, onChange, onBlur, required, fieldColor } = props;
    const [showPassword, setShowPassword] = React.useState(false)
    const [type, setType] = React.useState(inputType)
    const passwordIcon = () => {
        setShowPassword(!showPassword)
        setType(showPassword ? "password" : 'text');
    }
    const Validate = (e: any) => {
        if (onChange) {
            onChange(e)
        }
    }
    const onBlurHandle = (e: any) => {
        if (onBlur) {
            onBlur(e)
        }
    }
    const onKeyDownHandel = (e: any) => {
        if (onKeyDown) {
            onKeyDown(e)
        }
    }
    return (
        <Box component={'div'}>
            {/* <Typography>
                {inputLabel}
                {required && <span>*</span>}
            </Typography> */}
            <TextField
                fullWidth
                disabled={disabled}
                variant="filled"
                label={inputLabel}
                ref={ref}
                value={value}
                placeholder={placeholder}
                type={type}
                inputProps={{ maxLength: maxLength || 99999999 }}
                onChange={(e) => Validate(e)}
                onKeyDown={(e) => { onKeyDownHandel(e) }}
                onBlur={(e) => { onBlurHandle(e) }}
                error={isError}
                helperText={isError ? helperText : ''}
                color={fieldColor}
                InputProps={{
                    endAdornment: showEye && <InputAdornment position='end'>
                        <IconButton onClick={() => passwordIcon()}>
                            {showPassword ? <Visibility fontSize='medium' /> : <VisibilityOff fontSize='medium' />}
                        </IconButton>
                    </InputAdornment>
                }}
            />
        </Box>
    )
}

export default forwardRef(TextInputField)

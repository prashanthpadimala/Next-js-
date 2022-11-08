import { Box, Typography } from '@mui/material'
import React from 'react'

interface IContainerProps {
    onChange?: any,
    type?: string,
    disabled?: boolean,
    placeholder?: string,
    multiple?: boolean,
    accept?: string,
    inputLabel?: string
    errorText?: string
    isError?: boolean
    removeFile?: any
    isRemove?: boolean
    id: any
    ref: any
}

const FileUploader: React.FC<IContainerProps> = React.forwardRef(({ ...props }, ref) => {
    const { onChange, type, disabled, placeholder, multiple, accept, inputLabel, errorText, isError, removeFile, id } = props;
    // const CommonStyles = muiStyles();
    const onChangeHandle = (e: any) => {
        if (onChange) {
            onChange(e)
        }
    }
    const inputRef = React.useRef(null);
    React.useImperativeHandle(ref, () => (inputRef.current));
    return (
        <Box component={'div'}>
            <Typography>{inputLabel}</Typography>
            <input
                id={id}
                ref={inputRef}
                disabled={disabled}
                onChange={(e: any) => onChangeHandle(e)}
                type={type}
                placeholder={placeholder}
                multiple={multiple}
                accept={accept}
            />
        </Box>
    )
})

FileUploader.defaultProps = {
    onChange: () => { return null },
    type: "file",
    disabled: false,
    placeholder: '',
    multiple: false,
    accept: '',
    inputLabel: '',
    errorText: "",
    isError: false,
    removeFile: null,
    id: null
}

export default FileUploader;
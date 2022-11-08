import React, { FC, ReactNode } from 'react';
import { Breakpoint, Button, Dialog, DialogContent, DialogTitle, Typography, Stack, Box } from '@mui/material'
import { Close } from '@mui/icons-material';
import { DialogActions, DialogActionsProps, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles'


interface IDialogProps {
    isOpen: boolean,
    handleClose?: { (): void },
    custTitle?: boolean,
    maxWidth?: Breakpoint,
    children: ReactNode | any,
    fullWidth?: boolean,
    title: string | ReactNode,
    custAction?: boolean,
    action?: ReactNode | any
}

const Popup: FC<IDialogProps> = (props) => {
    let { isOpen, maxWidth, children, handleClose, fullWidth, title, custTitle, custAction, action } = props;
    return (
        <Box >
            <Dialog open={isOpen} fullWidth={fullWidth} maxWidth={maxWidth} onClose={handleClose}
                scroll="paper" aria-labelledby='scroll-outer' aria-describedby='scroll-inner'>
                <DialogTitle id="scroll-outer">{custTitle ? <React.Fragment>{title}</React.Fragment> : <Typography>{title}</Typography>}</DialogTitle>
                <DialogContent sx={{ minHeight: "10rem" }}>
                    {children}
                </DialogContent>
                {custAction ? <CustDialogActions>{action}</CustDialogActions> : null}
            </Dialog>
        </Box>
    )
}

Popup.defaultProps = {
    isOpen: false,
    maxWidth: "sm",
    fullWidth: true,
    custTitle: false,
    custAction: false,
    title: "",
}

const CustDialogActions = styled(DialogActions)<DialogActionsProps>(() => ({
    justifyContent: "center",
    WebkitJustifyContent: "center"
}))
export default Popup;
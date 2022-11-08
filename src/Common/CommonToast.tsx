import { Alert, Button, IconButton, Slide, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import { SlideProps } from '@mui/material/Slide';
interface IContainerProps {
    open: boolean,
    message?: string,
    toastType?: any,
    handleClose?: any,
    action?: any
}
type TransitionProps = Omit<SlideProps, 'direction'>;


const Toast: React.FC<IContainerProps> = (props) => {
    const { open, message, handleClose, toastType } = props;
    const close = (event?: any, reason?: any) => {
        if (reason === 'clickaway') {
            return;
        }
        if (handleClose) {
            handleClose()
        }
    }
    function TransitionUp(props: TransitionProps) {
        return <Slide {...props} direction="up" />;
    }
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={() => close()}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => close()}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={close}
                action={action}
                TransitionComponent={TransitionUp}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={() => close()} severity={toastType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}
Toast.defaultProps = {
    open: false,
    message: '',
    toastType: 'success',
    handleClose: () => { return null },
    action: () => { return null }
}
export default React.memo(Toast, (prevProps, nextProps) => {
    if (prevProps.message === nextProps.message && prevProps.toastType === nextProps.toastType && prevProps.open === nextProps.open) {
        return true
    } else {
        return false
    }
});
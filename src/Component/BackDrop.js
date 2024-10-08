import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop({ isload = false }) {
    // const [open, setOpen] = React.useState(isload);
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    return (
        <div>
            {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isload}
            // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicButtons from '../Button';
import QR from "../../assets/QR (2).jpg"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    borderRadius: 10,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

export default function BasicModal({ isPopUp, setisPopUp }) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setisPopUp(true);
    const handleClose = () => setisPopUp(false);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Pay with QR / UPI
                    </Typography>
                    <span style={{ fontSize: 11 }}>Once Payment done just click on payment done</span>
                    <img src={QR} width={200} height={300} />
                    <br />
                    <BasicButtons
                        onClick={() => { window.location.replace("./Submit") }}
                        text="Payment done"
                        class="cta-btn"
                        // outline={true}
                        variant="contained" />
                </Box>
            </Modal>
        </div>
    );
}
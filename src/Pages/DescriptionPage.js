import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { Alert, Grid, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import BasicButtons from '../Component/Button';
import SellerCard from '../Component/SellerCard';
import "../Component/style.css";
import { addToCart } from '../redux/cartSlice';
const DescriptionPage = (props) => {
    // Read values passed on state
    const dispatch = useDispatch();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const { id, pText, kits, img, rs } = location?.state || ""
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }; const navigate = useNavigate();
    return (
        <div>
            <div>
                <Grid container spacing={2}>
                    <Grid style={{ padding: 40 }} item md={6} xs={12}>
                        <img style={{ borderRadius: 15 }} width={400} height={400} src={img} />
                    </Grid>
                    <Grid style={{ marginTop: 40 }} item md={6} xs={12}>
                        <div style={{ textAlign: "left" }}>
                            <div style={{ display: "flex", alignItems: 'center', fontSize: 14, marginBottom: 10 }}>
                                <span style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>Home</span> &nbsp;
                                <span>/</span>&nbsp;
                                <span>Product</span>
                            </div>
                            <span style={{ fontSize: 40, fontWeight: 600 }}>{pText}</span>
                            <div style={{ display: "flex", alignItems: 'center', marginTop: 10 }}>
                                <span style={{ fontWeight: "bold" }}>$.{rs}</span> &nbsp;&nbsp;
                                <span>|</span>&nbsp;&nbsp;
                                <span>{kits}</span>
                            </div>
                            <div>
                                <span style={{ display: "flex", alignItems: 'center', marginTop: 10 }}>
                                    <AirportShuttleIcon />  &nbsp;&nbsp;
                                    Eligible for instant delivery</span>
                            </div>
                            <br />
                            <BasicButtons size={"large"} onClick={() => { dispatch(addToCart(id)); setOpen(true) }} text="Add To Cart" class="cta-btn" variant="contained" />
                        </div>
                        {/* <BasicButtons size={"large"} text="Buy Now" class="cta-btn" variant="contained" />
                        &nbsp;&nbsp;&nbsp;&nbsp; */}
                        {/* <button class="cta-btn">Buy Now</button>

<button onClick={() => { dispatch(addToCart(id)); setOpen(true) }} class="cta-btn">Add to Cart</button> */}
                    </Grid>

                </Grid>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Item Added to Cart
                </Alert>
            </Snackbar>
            {/* <MainComponent /> */}
            <SellerCard />
        </div >
    )
}

export default DescriptionPage
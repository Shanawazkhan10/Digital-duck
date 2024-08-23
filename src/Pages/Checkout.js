import { Box, Divider, Grid } from '@mui/material';
import React, { useState } from 'react'
import img from "../assets/checkout.jpg"
import "../Component/style.css"
import BasicButtons from '../Component/Button';
import RazorPay from '../Component/RazorPay';
import { useSelector } from 'react-redux';
import BasicModal from '../Component/Modal/Modal';
const Checkout = () => {
    const [isPopUp, setisPopUp] = useState(false)
    const cartItem = useSelector(state => state.cart.cart)
    var grandTotal = function (arr) {
        return arr?.reduce((sum, i) => {
            return sum + i.Rs
        }, 0)
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <img width={600} height={500} src={img} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <div style={{ textAlign: 'left', marginTop: 15 }}>

                        <span className='bg-blue' style={{ fontSize: 40, fontWeight: 700 }}>
                            Thanks for ordering</span>
                        <br />
                        <span style={{ fontSize: 12, color: 'gray' }}>Your order was processed and your assets are avaiable to download below</span>
                        <br />
                        <span style={{ fontSize: 12, color: 'gray' }}>We will sent your reciept order an assest on registered Email on transcation done successfully</span>
                    </div>

                    <div style={{ marginLeft: 10 }}>
                        <Box
                            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "auto" }}
                            role="presentation"
                            width={500}
                        // onClick={toggleDrawer(anchor, false)}
                        // onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <br />
                            {cartItem?.map(({ Rs, id, imgURI, kits, text }) => (

                                <div className='order-list'>
                                    <img width={100} height={100} src={imgURI} />
                                    <div style={{ textAlign: 'left' }}>
                                        <span>{text}</span>
                                        <br />
                                        <span>{kits}</span>
                                        <br />
                                    </div><span>$.{Rs}</span>
                                </div>

                            ))
                            }
                            <br />
                            {/* </List> */}
                            <Divider />
                            <div style={{ textAlign: "right" }}>
                                <span>Subtotal : $.{grandTotal(cartItem)}</span>
                                <br />
                                <span>transcation Fees : $.1</span>
                                <br />
                                <span>Total : $.{grandTotal(cartItem) + 1}</span>
                            </div>
                        </Box>
                    </div>

                    <Grid style={{ padding: 10 }} item md={12} xs={12}>
                        <div style={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <RazorPay /> &nbsp;&nbsp;
                            {isPopUp && <BasicModal isPopUp={isPopUp} setisPopUp={setisPopUp} />}
                            <BasicButtons
                                onClick={() => { setisPopUp(true) }}
                                text="Pay with QR"
                                class="cta-btn"
                                outline={true}
                                variant="contained" />
                        </div>
                    </Grid>
                    {/* <button onClick={() => { dispatch(addToCart(id)); setOpen(true) }} class="cta-btn">Add to Cart</button> */}
                </Grid>

            </Grid>
        </div >
    )
}

export default Checkout
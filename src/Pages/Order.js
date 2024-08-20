import { Grid } from '@mui/material';
import React from 'react'
import img from "../assets/hippo-email-sent.png"
const Order = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <img width={600} height={500} src={img} />
                </Grid>
                <Grid item md={6} xs={12}>
                    {/* <h1>{pText}</h1>
                    <p>{kits}</p>
                    <p>{rs}</p> */}
                    <button class="cta-btn">Buy Now</button>
                    {/* <button onClick={() => { dispatch(addToCart(id)); setOpen(true) }} class="cta-btn">Add to Cart</button> */}
                </Grid>

            </Grid>
        </div>
    )
}

export default Order
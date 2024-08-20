import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/submit.png"
import "../../Component/style.css"

const Submit = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Grid container spacing={2}>
                <Grid style={{ padding: 40 }} item md={6} xs={12}>
                    <img style={{ borderRadius: 15 }} width={600} height={400} src={img} />
                </Grid>
                <Grid style={{ marginTop: 110, padding: 40 }} item md={6} xs={12}>
                    <span className='bg-blue ' style={{ fontSize: 40, fontWeight: 700 }}>Your UI KITS submitted successfully</span>
                    <br />
                    <br />
                    <span style={{ fontSize: 20, fontWeight: 300 }}>Have patience your UI KITS will be listed on verification done</span>
                </Grid>
            </Grid>
        </div>
    )
}

export default Submit
import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import '../../Component/Sidebar/SideIndex.css'
import AdminCard from '../../Component/AdminCard'
import { Grid } from '@mui/material'

const AdminHome = () => {
    return (
        <div>
            <Sidebar />
            <div style={{ marginLeft: 300 }}>
                <Grid container spacing={2}>
                    <Grid style={{ padding: 40 }} item md={4} xs={12}>
                        <AdminCard />
                        <br />
                        <br />
                        <AdminCard />
                    </Grid>
                    <Grid style={{ padding: 40 }} item md={4} xs={12}>
                        <AdminCard />
                        <br />
                        <br />
                        <AdminCard />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default AdminHome
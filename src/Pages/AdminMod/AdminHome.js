import React, { useEffect, useState } from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import '../../Component/Sidebar/SideIndex.css'
import AdminCard from '../../Component/AdminCard'
import { Grid } from '@mui/material'
import { child, get, getDatabase, push, ref, set, update } from "firebase/database"
import { FireBaseApp } from '../../firebase'
const AdminHome = () => {
    const [liveData, setLiveData] = useState([])
    const [loading, setLoading] = useState([])
    const fetchVersion = async () => {
        const db = getDatabase(FireBaseApp)
        const dbrefLive = ref(db, "ProductList")
        const snapshotlive = await get(dbrefLive)
        await setLiveData(Object.values(snapshotlive.val())?.[0])
        if (Object.values(snapshotlive.val())?.[0].length > 0) {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchVersion()
    }, [])
    return (
        <div>
            <Sidebar />
            <div style={{ marginLeft: 300 }}>
                <Grid container spacing={2}>
                    <Grid style={{ padding: 40 }} item md={4} xs={12}>
                        <AdminCard heading={"Active Users"} number={48} />
                        <br />
                        <br />
                        <AdminCard heading={"UI Approval"} number={4} />
                    </Grid>
                    <Grid style={{ padding: 40 }} item md={4} xs={12}>
                        <AdminCard heading={"Purchase Approval"} number={6} />
                        <br />
                        <br />
                        <AdminCard heading={"Product List Count"} number={16} />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default AdminHome
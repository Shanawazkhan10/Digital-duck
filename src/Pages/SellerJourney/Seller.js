import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Button, Grid, MenuItem, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/seller.png"
import BasicButtons from '../../Component/Button'
import "../../Component/style.css"
import { child, get, getDatabase, push, ref, set, update } from "firebase/database"
import { FireBaseApp } from '../../firebase'
import SimpleBackdrop from '../../Component/BackDrop'
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const Seller = () => {
    const navigate = useNavigate()
    const [liveData, setLiveData] = useState([])
    const [loading, setLoading] = useState([])
    const [sellingData, setSellingData] = useState({

        name: "", des: "", vari: "Icons", price: "", uri: ""
    })
    const currencies = [
        {
            value: 'Icons',
            label: 'Icons',
        },
        {
            value: 'UI Kits',
            label: 'UI Kits',
        },
        {
            value: 'Logos',
            label: 'Logos',
        },
    ];
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
    const handleSubmit = (domain = null, val = null) => {
        setLoading(true)
        const db = getDatabase(FireBaseApp)
        const updates = {};
        const { name, des, vari, price, uri } = sellingData
        let payload = {
            id: Math.random(), email: name, text: des, kits: vari, imgURI: uri, Rs: price, isStatus: false, dateTimeNow: new Date().toLocaleString()
        }
        console.log(payload, "DMODDOKKOODOKDOKDKO 12121212");

        liveData?.push(payload)
        // console.log("CICJCIJIJCJICJI", liveData, sellingData);

        // let tempArr = { id: 1, text: "Engage with custom activities.", kits: "UI Kits", imgURI: img, Rs: 20.00, isStatus: true, dateTimeNow: new Date().toLocaleString() }
        // liveData?.push(tempArr)

        updates["ProductList"] = [liveData]

        return update(ref(db), updates)
            .then(() => { window.location.replace("./Submit") })
            .catch(() => alert("ERROR Occurs"));
    }
    const handleChange = async (e) => {
        const { name, value, type } = e.target
        if (type === "file") {
            await base64Format(e.target.files[0])
        } else {
            setSellingData(prev => ({ ...prev, [name]: value }))
        }
    }
    const base64Format = async (imageURL) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(imageURL)
            reader.onload = async () => {
                setSellingData(prev => ({ ...prev, 'uri': reader.result }))
                await resolve(reader.result)
            }
            reader.onerror = reject
        })

    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid style={{ padding: 40 }} item md={6} xs={12}>
                    <img style={{ borderRadius: 15 }} width={600} height={400} src={img} />
                </Grid>
                <Grid style={{ padding: 40 }} item md={6} xs={12}>
                    <span className='bg-blue' style={{ fontSize: 40, fontWeight: 700 }}>Seller Page UI KITS</span>
                    <Grid container>
                        <Grid style={{ padding: 10 }} item md={12} xs={12}>
                            <TextField
                                name='name'
                                onChange={handleChange}
                                style={{ width: 400 }} id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid style={{ padding: 10 }} item md={12} xs={12}>
                            <TextField style={{ width: 400 }}
                                name='des'
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={3}
                                onChange={handleChange}
                            // defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid style={{ padding: 10 }} item md={12} xs={12}>
                            <TextField name='price' onChange={handleChange} style={{ width: 400 }} id="outlined-basic" label="Price" variant="outlined" />
                        </Grid>
                        <Grid style={{ padding: 10 }} item md={12} xs={12}>

                            <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                name='vari'
                                label="Select"
                                defaultValue="Icons"
                                helperText="Please select your Variant"
                                style={{ width: 400 }}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* <TextField style={{ width: 400 }} id="outlined-basic" label="Variant" variant="outlined" /> */}
                        </Grid>
                        <Grid style={{ padding: 10 }} item md={12} xs={12}>

                            {/* <input
                                placeholder="Enter here"
                                type="file"
                                onChange={handleChange}
                                // accept={acceptFiles}
                                // style={disabled ? { cursor: "not-allowed" } : { cursor: "pointer" }}
                                // disabled={disabled}
                                onClick={(event) => {
                                    event.currentTarget.value = null
                                }}
                            /> */}
                            <Button
                                component="label"
                                role={undefined}
                                type="file"
                                onChange={handleChange}
                                variant="contained"
                                tabIndex={-1}
                                onClick={(event) => {
                                    event.currentTarget.value = null
                                }}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <br />
                            <br />
                            {!!sellingData?.uri && <>
                                <img width={200} height={200} src={sellingData?.uri} />
                                <br />
                                <span>Preview image</span>
                            </>}
                            {/* <TextField style={{ width: 400 }} id="outlined-basic" label="Variant" variant="outlined" /> */}
                        </Grid>
                        <Grid style={{ padding: 10 }} item md={12} xs={12}>
                            <BasicButtons
                                onClick={handleSubmit}
                                text="Save & Continue"
                                class="cta-btn"
                                variant="contained" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <SimpleBackdrop isload={loading} />
        </div>
    )
}

export default Seller
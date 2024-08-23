import { get, getDatabase, ref } from "firebase/database"
import React, { useEffect, useState } from 'react'
import SimpleBackdrop from "../Component/BackDrop"
import MediaCard from '../Component/CommanCard'
import "../Component/style.css"
import { FireBaseApp } from "../firebase"
const Trending = () => {
    // useEffect(() => {
    //     const db = getDatabase(FireBaseApp)

    //     const newVersion = push(ref(db, "ProductList"));
    //     set(newVersion, arrCard
    //     )
    //         .then(() => alert("data saved Successfullu"))
    //         .catch(() => alert("FAILED"))
    // }, [])
    const [liveData, setLiveData] = useState([])
    const [ApproveList, setApproveList] = useState([])
    const [loading, setLoading] = useState([])
    const fetchVersion = async () => {
        const db = getDatabase(FireBaseApp)
        const dbrefLive = ref(db, "ProductList")
        const snapshotlive = await get(dbrefLive)
        await setLiveData(Object.values(snapshotlive.val())?.[0])

        let ApprData = await (Object.values(snapshotlive.val())?.[0])?.filter?.((i) => i?.isStatus)
        setApproveList(ApprData)

        if (Object.values(snapshotlive.val())?.[0].length > 0) {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchVersion()
    }, [])
    return (
        <div>
            <h1 >Our Trending digital assets</h1>
            {/* <div style={{ textAlign: "center" }}>
                <SearchBar />
            </div> */}
            <section id="features">
                <h2>Features</h2>
                <div class="features-container">
                    {ApproveList?.map(({
                        id, text, kits, imgURI, Rs
                    }) => (
                        <MediaCard id={id} text={text} kits={kits} imgURI={imgURI} Rs={Rs} />
                    ))}
                </div>
            </section>
            <SimpleBackdrop isload={loading} />
        </div>
    )
}

export default Trending
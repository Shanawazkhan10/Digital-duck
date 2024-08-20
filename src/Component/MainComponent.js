import React, { useEffect, useState } from 'react'
import { arrCard } from '../constant'
import BasicButtons from './Button'
import MediaCard from './CommanCard'
import "./style.css"
import { FireBaseApp } from '../firebase'
import { child, get, getDatabase, push, ref, set, update } from "firebase/database"
import SimpleBackdrop from './BackDrop'
import img from "../assets/an4.jpg"
const MainComponent = () => {
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

    // const handleSubmit = (domain = null, val = null) => {
    //     const db = getDatabase(FireBaseApp)
    //     const updates = {};

    //     let tempArr = { id: 1, text: "Engage with custom activities.", kits: "UI Kits", imgURI: img, Rs: 20.00, isStatus: true, dateTimeNow: new Date().toLocaleString() }

    //     liveData?.push(tempArr)

    //     updates["ProductList"] = [liveData]

    //     return update(ref(db), updates)
    //         .then(() => window.location.reload())
    //         .catch(() => alert("ERROR Occurs"));
    // }

    return (
        <div>
            {window.location?.pathname !== "/Product-Description" && <section id="hero">
                <div class="hero-content">
                    <div className='main-font'>
                        <h1 >
                            Your marketplace for high-quality <span style={{ color: "#575DD5" }}>digital assets</span>.
                        </h1>
                        <p>Welcome to Digital Duck. Every asset on our platform is verified by our team to ensure our highest quality standards.</p>
                    </div>
                    <BasicButtons text="Browse Trending" class="cta-btn" variant="contained" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <BasicButtons text="Our Quality Promises" class="cta-btn" outline={true} />
                </div>
            </section>}
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

            {/* <section id="how-it-works">
                <h2>How It Works</h2>
                <div class="steps-container">
                    <div class="step">
                        <ion-icon name="create-outline" class="icon" alt="Sign Up"></ion-icon>
                        <h3>Sign Up</h3>
                        <p>Create your free account easily.</p>
                    </div>
                    <div class="step">
                        <ion-icon name="people-outline" class="icon" alt="Connect"></ion-icon>
                        <h3>Connect</h3>
                        <p>Join a classroom and be a part of a community</p>
                    </div>
                    <div class="step">
                        <ion-icon name="school-outline" class="icon" alt="Learn"></ion-icon>
                        <h3>Learn</h3>
                        <p>Start using the platform to excel in your studies.</p>
                    </div>
                </div>
            </section> */}
            {/* <section id="resources">
                <h2>Resources</h2>
                <div class="resources-container">
                    <div class="resource-card">
                        <h3>Educational Articles</h3>
                        <p class="resource-link" onclick="window.location.href='#';">Links or thumbnails to blog posts, guides, or study tips.</p>
                    </div>
                    <div class="resource-card">
                        <h3>FAQs</h3>
                        <p class="resource-link" onclick="toggleFAQ()">A collapsible or expandable list of frequently asked questions.</p>
                    </div>
                    <div class="resource-card">
                        <h3>Help Center</h3>
                        <p class="resource-link" onclick="window.location.href='#';">Access to help documentation or a support contact form.</p>
                    </div>
                </div>
            </section> */}
            <SimpleBackdrop isload={loading} />
        </div>
    )
}

export default MainComponent
import { Divider } from '@mui/material'
import React from 'react'
import img from "../assets/m-ico.png"
import { useNavigate } from 'react-router-dom'
const SellerCard = () => {
    const navigate = useNavigate()
    return (
        <div>
            <br />
            <Divider />
            <div className='main-contain'>
                <div className='inner-contain'>
                    <img className='icons' src={img} width={80} height={80} /><br />
                    <span>Become a seller</span><br />
                    <span>If you'd like to sell high quality digital products, you can do</span><br />
                    <span>So in minutes. <span onClick={() => { navigate("./Seller") }} style={{ cursor: 'pointer' }} className='bg-blue'>Get Started</span></span>
                </div>
            </div>
        </div>
    )
}

export default SellerCard
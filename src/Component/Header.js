import React, { useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDrawer from './CartDrawer';
import { useSelector } from 'react-redux';
import { auth, signInWithGooglePopup } from '../firebase';
import { Avatar, Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import BasicButtons from './Button';
import iconsBan from "../assets/m-ico.png"
const Header = () => {
    const navigate = useNavigate();
    const [openDrawer, setopenDrawer] = useState(false)
    const cartItem = useSelector(state => state.cart.cart)
    let userData = localStorage.getItem("userDetails")
    console.log(JSON.stringify(userData), "DKODKDOKDKODKODKOOK 331231313");
    if (!!userData) {
        var { email, photoUrl } = JSON.parse(userData)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            localStorage.clear()
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }
    const logGoogleUser = async (sellerPage = null) => {
        const response = await signInWithGooglePopup();
        let { emailVerified, email } = response?._tokenResponse
        console.log(emailVerified, email);
        localStorage.setItem("userDetails", JSON.stringify(response?._tokenResponse));
        if (email === "shanawaz.khan@nivesh.com") {
            window.location.replace("./Admin")
        }
        else if (emailVerified && email) {
            if (!!sellerPage) {
                navigate("./Seller")
            } else {
                window.location.reload()
            }
        } else {
        }
    }
    console.log(userData, "DKDKDODKODKODKOD");

    return (
        <div>
            <header class="site-header">
                <div onClick={() => {
                    navigate(
                        "./"
                        // navigate({ pathname: "./Product-Description" })
                    )
                }} class="site-identity">
                    <div className='banner-icon'>
                        <h1><a href="#">Digital
                            Duck</a></h1>
                        <img className='icons' src={iconsBan} width={80} height={80} />

                    </div>
                </div>
                <nav class="site-navigation">
                    <ul class="nav">
                        {/* <li><a href="#">About</a></li>
                        <li><a href="#">News</a></li> */}
                        {!!userData ? <> <Button color="inherit">
                            <Avatar style={{ marginRight: 5 }} sx={{ width: 30, height: 30 }} alt={photoUrl} src={photoUrl} />
                            {email}</Button>&nbsp;
                            {window.location.pathname !== "/Admin" && <BasicButtons
                                onClick={() => { navigate("./Seller") }}
                                text="Become a Seller"
                                class="cta-btn"
                                variant="contained" />}&nbsp;&nbsp;
                            <BasicButtons
                                onClick={() => handleLogout()}
                                text="Logout" outline={true} />
                            {/* <Button onClick={() => handleLogout()} color="inherit">Logout</Button> */}
                        </> :
                            <>

                                <li>

                                    <BasicButtons
                                        onClick={() => logGoogleUser()}
                                        text="Login" outline={true} />
                                    {/* <a href="#" onClick={() => logGoogleUser()}>Login</a> */}
                                </li>
                                <li>
                                    <BasicButtons
                                        onClick={() => logGoogleUser("Seller")}
                                        text="Become a Seller"
                                        class="cta-btn"
                                        variant="contained" />

                                </li>
                            </>
                        }
                        {(!!userData || window.location.pathname !== "/Admin") && <div className='cart-main'>
                            <ShoppingCartIcon style={{ fontSize: 28 }} onClick={() => setopenDrawer(true)} />
                            <span className='cart-count'>{cartItem?.length}</span>
                        </div>}
                    </ul>
                </nav>
            </header>
            <CartDrawer openDrawer={openDrawer} setopenDrawer={setopenDrawer} />
        </div >
    )
}

export default Header
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Empty from "../assets/hippo-empty-cart.png";
import { RemoveCartItem } from '../redux/cartSlice';
import BasicButtons from './Button';
import "./style.css";
// import MediaCard from './cartCard';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function CartDrawer({ openDrawer, setopenDrawer }) {
    const cartItem = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [TotalPrice, setTotalPrice] = React.useState(0)
    // let TotalPrice = 0
    // React.useEffect(() => {
    //     setTotalPrice(cartItem.reduce(getSum, 0))
    // }, [cartItem])
    var grandTotal = function (arr) {
        return arr?.reduce((sum, i) => {
            return sum + i.Rs
        }, 0)
    };
    console.log(grandTotal(cartItem), cartItem, "DKDKODDOKDKODKODKO");

    const toggleDrawer = (newOpen) => () => {
        setopenDrawer(!newOpen)
    };
    const list = (anchor) => (
        <div style={{ marginLeft: 10 }}>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "auto" }}
                role="presentation"
                width={100}
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
            >
                <br />
                {/* <List> */}
                {cartItem?.map(({ Rs, id, imgURI, kits, text }) => (

                    <div className='order-list'>
                        <img width={100} height={100} src={imgURI} />
                        <div>
                            <span>{text}</span>
                            <br />
                            <span>{kits}</span>
                            <br />
                        </div><span>$.{Rs}</span>
                    </div>

                ))
                }
                {cartItem?.length !== 0 && <div style={{ marginLeft: 36 }}>
                    <BasicButtons onClick={() => dispatch(RemoveCartItem())} text="Clear Cart" class="cta-btn" outline={true} />
                </div>}
                {cartItem?.length === 0 &&
                    <div style={{ textAlign: "center" }}>
                        <h1>Your Cart is Empty</h1>
                        <img src={Empty} width={400} height={400} />
                    </div>
                }
                <br />
                {/* </List> */}
                <Divider />
                <br />
                {cartItem?.length !== 0 &&
                    <div style={{ textAlign: 'center' }}>
                        <BasicButtons onClick={() => { setopenDrawer(false); navigate("/Checkout"); }} text="Place Order" class="cta-btn" />
                    </div>
                    // <RazorPay />
                }
                {/* <span>$.{grandTotal(cartItem)}</span> */}
            </Box>
        </div>
    );

    return (
        <div>
            {/* {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <SwipeableDrawer
                PaperProps={{
                    sx: { width: "35%" },
                }}
                anchor={"right"}
                open={openDrawer}
                onClose={toggleDrawer(false)}
                // onClick={toggleDrawer(!openDrawer)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
            >
                <span style={{ cursor: 'pointer' }} onClick={() => { setopenDrawer(!openDrawer) }}><ArrowBackIcon style={{ fontSize: 30 }} /></span>
                {list('right')}
            </SwipeableDrawer>
            {/* </React.Fragment>
            ))} */}
        </div>
    );
}
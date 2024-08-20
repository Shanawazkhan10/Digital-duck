import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer } from "react-toastify";
import { arrCard } from "../constant";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {

        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload);
            if (!itemInCart) {
                let arrayList = arrCard?.find((i) => i.id === action.payload)
                // return <ToastContainer />
                state.cart.push(arrayList);
            }
        },
        RemoveCartItem: (state, action) => {
            if (state.cart.length > 0) {
                state.cart = [];
            }
        },

        addQty: (state, action) => {
            console.log(action.payload, "DKDOKDDKODKODKODOK");
            const itemInCart = state.cart.find((item) => item.name === action.payload.name);
            if (itemInCart) {
                itemInCart.quantity++;
            }
        },
        reduceQty: (state, action) => {
            const itemInCart = state.cart.find((item) => item.name === action.payload.name);
            if (itemInCart && itemInCart.quantity !== 1) {
                itemInCart.quantity--;
            }
        },
    }
})

// export default cartSlice;
// export const { addToCart } = cartSlice.reducer


export const { addToCart, addQty, reduceQty, RemoveCartItem } = cartSlice.actions;
export default cartSlice.reducer;
import Button from '@mui/material/Button';
import * as React from 'react';
import "./style.css"
export default function BasicButtons({ size, variant, text, onClick, outline = false }) {
    return (

        <Button
            style={outline ? { backgroundColor: 'white', color: '#575DD5', border: "0.5px solid #575DD5" } :
                { backgroundColor: "#575DD5", color: "white" }
            }
            onClick={onClick} size={size} >{text}</Button>

    );
}
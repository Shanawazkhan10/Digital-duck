import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Cards = ({
    id, text, kits, imgURI, Rs
}) => {
    // const history = ()
    const navigate = useNavigate();
    return (
        <div>

            <div onClick={() => {
                navigate(
                    "./Product-Description", {
                    state: {
                        id: id, pText: text, kits: kits, img: imgURI, rs: Rs
                    }
                }

                    // navigate({ pathname: "./Product-Description" })
                )
            }} class="feature-card">
                <ion-icon name="book-outline" class="icon" alt="Interactive Exercises"></ion-icon>
                <img src={imgURI} style={{ width: 230, height: 230 }} />
                <p>{text}</p>
                <p>{kits}</p>
                <p>${Rs}</p>

            </div></div >
    )
}

export default Cards
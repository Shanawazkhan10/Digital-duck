import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({ id, text, kits, imgURI, Rs }) {
    const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }))

    // console.log(imgURI?.includes("blob") ? toDataURL(imgURI) : imgURI, 'DODOKDKODODKOKDODKO');
    const navigate = useNavigate();
    return (
        <Card style={{ textAlign: "center", cursor: 'pointer', borderRadius: 15, objectFit: "cover" }} onClick={() => {
            if (window.location.pathname === "/") {
                return false
            } else {
                navigate(
                    "./Product-Description", {
                    state: {
                        id: id, pText: text, kits: kits, img: imgURI, rs: Rs
                    }
                }
                )
            }
        }} sx={{ maxWidth: 345, maxHeight: 390 }}>
            <div style={{ display: 'flex', marginTop: 12, justifyContent: "space-evenly" }}>
                <CardMedia
                    style={{ borderRadius: 15 }}
                    sx={{ height: 280, width: 280 }}
                    image={imgURI}
                    title="green iguana"
                />
            </div>
            <div style={{ textAlign: "left" }}>
                <CardContent>
                    <Typography style={{ fontSize: 16, fontWeight: "bold" }} variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {kits}
                    </Typography>
                    <Typography style={{ fontSize: 14, fontWeight: "bold" }} variant="body2" color="text.secondary">
                        $.{Rs}
                    </Typography>
                </CardContent>
            </div>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({ id, text, kits, imgURI, Rs }) {
    const navigate = useNavigate();
    return (
        <Card style={{ textAlign: "center", cursor: 'pointer', borderRadius: 15, objectFit: "cover" }} onClick={() => {
            navigate(
                "./Product-Description", {
                state: {
                    id: id, pText: text, kits: kits, img: imgURI, rs: Rs
                }
            }
            )
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

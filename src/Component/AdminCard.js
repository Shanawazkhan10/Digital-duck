import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



export default function AdminCard({ heading, number }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card heading={heading} style={{ width: 300, height: 200, borderRadius: 15 }} variant="outlined">
                <React.Fragment>
                    <CardContent>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography> */}
                        <Typography variant="h5" component="div">
                            {heading}
                        </Typography>
                        <Typography variant="h3" sx={{ mb: 1.5 }} color="text.secondary">
                            {number}
                        </Typography>
                        <Typography variant="body2">
                            Digital Duck
                            <br />
                            {'Admin panel'}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
                </React.Fragment>
            </Card>
        </Box>
    );
}

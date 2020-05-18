import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import Hero from '../img/Homepage-Hero-min.jpg';

export default function FrontPage() {

    return (
        <Container maxWidth='lg'>
            <Box style={{width: "100%",
                         height: "85vh",
                         backgroundImage: `url(${Hero})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
            }}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)',
                             width: "100%",
                             height: "100%"
                }}>
                    <Typography variant="h3" style={{color: "#ffffff", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.54)"}}>
                        Our Coffee will keep you grounded.
                    </Typography>
                    <Box p={2} >
                        <Button variant="contained" color="primary" size="large">
                            Shop
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
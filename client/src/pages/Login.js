import * as React from "react";
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from "@mui/material";

function Login() {
    return (
        <Container maxWidth="xl" sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <h1>Sign in with Google</h1>
            <p>New users can sign up for QuantReady with Google. Existing users will be logged in.</p>
            <Button variant="outlined" fontSize="large" startIcon={<GoogleIcon sx={{ color: "white" }} />} sx={{ backgroundColor:"#1976D2" }}>
                <Typography sx={{color:"white", textTransform: "none"}}>
                    Sign-In/Login with Google
                </Typography>
            </Button>
        </Container>
    );
}

export default Login;
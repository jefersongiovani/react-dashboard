// src/pages/PageNotFound.jsx
import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const PageNotFound = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '70vh',
                    textAlign: 'center',
                }}
            >
                <ErrorOutlineIcon
                    sx={{
                        fontSize: 80,
                        color: theme.palette.error.main,
                        mb: 2,
                    }}
                />
                <Typography variant="h3" gutterBottom>
                    404 - Page Not Found
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Typography>
                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Go to Dashboard
                </Button>
            </Box>
        </Container>
    );
};

export default PageNotFound;
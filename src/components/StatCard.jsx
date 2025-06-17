// src/components/StatCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconWrapper = styled(Box)(({ theme, color }) => ({
    backgroundColor: color || theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    display: 'inline-flex',
}));

const StatCard = ({ title, value, icon, color }) => {
    return (
        <Card>
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <Typography color="textSecondary" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="h5">{value}</Typography>
                    </Box>
                    <IconWrapper color={color}>{icon}</IconWrapper>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StatCard;
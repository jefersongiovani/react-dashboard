// src/components/ControlPanel.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Box,
    CssBaseline,
    Toolbar,
    Container,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import AppBar from './AppBar';
import Sidebar from './Sidebar';
import DashboardPage from '../pages/DashboardPage';
import PageNotFound from '../pages/PageNotFound';

const drawerWidth = 240;
const ControlPanel = ({ menuItems }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Dynamically generate routes from menuItems
    const generateRoutes = (items) => {
        return items.map((item) => {
            if (item.subItems) {
                return [...generateRoutes(item.subItems)];
            }

            // In a real app, you'd import components dynamically based on item.component
            // For this example, we'll just route everything to DashboardPage except /settings
            if (item.path === '/settings') {
                return (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={<div>Settings Page Content</div>}
                    />
                );
            }

            return (
                <Route
                    key={item.path}
                    path={item.path}
                    element={<DashboardPage />}
                />
            );
        });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                sidebarOpen={sidebarOpen}
                handleSidebarToggle={handleSidebarToggle}
                drawerWidth={drawerWidth}
            />
            <Sidebar
                menuItems={menuItems}
                sidebarOpen={sidebarOpen}
                handleSidebarToggle={handleSidebarToggle}
                isMobile={isMobile}
                drawerWidth={drawerWidth}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Routes>
                        {generateRoutes(menuItems)}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Container>
            </Box>
        </Box>
    );
};

export default ControlPanel;
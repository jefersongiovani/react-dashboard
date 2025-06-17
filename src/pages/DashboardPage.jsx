// src/pages/DashboardPage.jsx
import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    useTheme,
} from '@mui/material';
import {
    Timeline,
    TrendingUp,
    People,
    AttachMoney,
} from '@mui/icons-material';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';

const DashboardPage = () => {
    const theme = useTheme();

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            <Grid container spacing={3}>
                {/* Stat Cards */}
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Total Revenue"
                        value="$24,000"
                        icon={<AttachMoney />}
                        color={theme.palette.primary.main}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Active Users"
                        value="1,600"
                        icon={<People />}
                        color={theme.palette.success.main}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Tasks Completed"
                        value="85%"
                        icon={<Timeline />}
                        color={theme.palette.warning.main}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Growth"
                        value="+12%"
                        icon={<TrendingUp />}
                        color={theme.palette.error.main}
                    />
                </Grid>

                {/* Charts */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Monthly Performance
                        </Typography>
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Recent Activity
                        </Typography>
                        {/* Activity timeline component would go here */}
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default DashboardPage;
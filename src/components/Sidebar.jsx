// src/components/Sidebar.jsx
import React from 'react';
import {
    Drawer,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const drawerWidth = 240;

const Sidebar = ({ menuItems, sidebarOpen, handleSidebarToggle, isMobile }) => {
    const theme = useTheme();

    const renderMenuItems = (items, depth = 0) => {
        return items.map((item) => (
            <React.Fragment key={item.text}>
                <ListItem
                    disablePadding
                    sx={{
                        display: 'block',
                        pl: depth > 0 ? depth * 2 : 0,
                    }}
                >
                    <ListItemButton
                        component={Link}
                        to={item.path}
                        sx={{
                            minHeight: 48,
                            justifyContent: sidebarOpen ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: sidebarOpen ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon && React.createElement(item.icon)}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.text}
                            sx={{ opacity: sidebarOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                {item.subItems && sidebarOpen && renderMenuItems(item.subItems, depth + 1)}
            </React.Fragment>
        ));
    };

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'persistent'}
            open={sidebarOpen}
            onClose={handleSidebarToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile
            }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <DrawerHeader>
                <IconButton onClick={handleSidebarToggle}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {renderMenuItems(menuItems)}
            </List>
        </Drawer>
    );
};

export default Sidebar;
// src/config/menuItems.js
const menuItems = [
    {
        text: 'Dashboard',
        icon: 'dashboard',
        path: '/',
        component: 'DashboardPage',
    },
    {
        text: 'Users',
        icon: 'people',
        path: '/users',
        component: 'UsersPage',
        subItems: [
            {
                text: 'All Users',
                path: '/users/all',
                component: 'AllUsersPage',
            },
            {
                text: 'Add User',
                path: '/users/add',
                component: 'AddUserPage',
            },
        ],
    },
    {
        text: 'Settings',
        icon: 'settings',
        path: '/settings',
        component: 'SettingsPage',
    },
];

export { menuItems };
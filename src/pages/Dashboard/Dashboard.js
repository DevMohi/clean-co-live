import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';
import AddAdmin from './AddAdmin'
import AddService from './AddService'
const Dashboard = () => {
    return (
        <DashboardSidebar>
            <Outlet />
        </DashboardSidebar>
    );
};

export default Dashboard;
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import { Outlet } from 'react-router-dom';

function AppLayout() {
    return (
        <div className='flex font-nunito text-zinc-900 overflow-x-hidden'>
            <SideNav />
            <div className='flex flex-col grow min-h-screen'>
                <TopBar />
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;

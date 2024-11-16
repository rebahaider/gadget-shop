import { Outlet } from "react-router-dom"
import Sidebar from "../../components/dashboard/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="grid lg:grid-clos-12">
            <div className="lg:col-span-2">
                <Sidebar></Sidebar>
            </div>
            <div className="lg:col-span-10">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashboardLayout

import { NavLink } from "react-router-dom"
import { GrOverview } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";



const Sidebar = () => {
    return (
        <div className="bg-yellow-100 border-r-2 border-black min-h-screen px-8 py-12">
            <h1 className="text-2xl font-bold mb-8">Gadget Shop</h1>
            <ul className="flex flex-col gap-4">
                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <GrOverview />
                        <p>Overview</p>
                    </NavLink>
                </li>
                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <AiOutlineHome />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <RiLogoutCircleRLine />
                        <p>Log Out</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

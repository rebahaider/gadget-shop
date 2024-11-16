import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="bg-yellow-100 border-r-2 border-black min-h-screen px-8 py-12">
            <h1 className="text-2xl font-bold mb-8">Gadget Shop</h1>
            <ul className="flex flex-col gap-4">
                <li>
                    <NavLink to="/dashboard/overview">Overview</NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <button className="btn btn-warning btn-outline">Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="bg-yellow-100 border-r-2 border-black h-screen">
            <ul className="flex flex-col gap-4">
                <li>
                    <NavLink to="/">Overview</NavLink>
                </li>
                <li>
                    <NavLink to="/">My Products</NavLink>
                </li>
                <li>
                    <NavLink to="/">Add Products</NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <button className="btn btn-warning btn-outline">Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar

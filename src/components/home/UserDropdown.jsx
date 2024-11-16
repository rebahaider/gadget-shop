import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const UserDropdown = () => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut();
    }
    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button"><div className="avatar">
                <div className=" w-12 rounded-full ">
                    <img src={`${user?.photoURL || "/user.png"}`} />
                </div>
            </div></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2">
                <li><NavLink to="/dashboard/overview">Dashboard</NavLink></li>
                <li>
                    <button onClick={handleLogout} className="btn btn-warning btn-sm btn-outline">Log Out</button>
                </li>
            </ul>
        </div>
    )
}

export default UserDropdown

import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "logout",
        {},
        { withCredentials: true }
      );
      const {status} = res.data;
      if(status) {
        return navigate('/login');
      }
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          devtinder 💬
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user && (
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="profile-photo" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

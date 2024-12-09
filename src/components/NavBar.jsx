import { useSelector } from "react-redux"


const NavBar = () => {
  const user = useSelector( (store) => store.user)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">devtinder 💬</a>
      </div>
      <div className="flex-none gap-2">
      {user  && <div className="dropdown dropdown-end mx-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="profile-photo"
                src={user.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default NavBar
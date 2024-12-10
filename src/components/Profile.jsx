import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className="h-[60vh] overflow-y-auto">
        <EditProfile user={user} />
      </div>
    )
  );
}

export default Profile

import { NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export const Nav = observer(() => {
  const {
    userStore: { user, logout },
  } = useStore();
  return (
    <div className="fixed top-0 z-50 w-full text-white nav">
      <div className="flex items-center justify-between max-w-2xl p-3 m-auto lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-row items-center gap-6">
          <header>
            <NavLink to="/" className="flex items-center gap-3">
              <img className="w-8" src="/assets/logo.png" alt="Logo" />
              <h3>Talkty</h3>
            </NavLink>
          </header>
          <div className="">
            <NavLink to="/activities">Activities</NavLink>
          </div>
          <div className="">
            <NavLink to="/errors">Errors</NavLink>
          </div>
          <NavLink to="/createactivity">
            <button className="p-2 bg-green-600 rounded-md">
              Create Activity
            </button>
          </NavLink>
        </div>

        <div className="flex flex-row items-center gap-3">
          <div className="flex gap-2">
            <NavLink to={`/profile/${user?.username}`}>My Profile</NavLink>
            <button onClick={logout}>Logout</button>
          </div>
          <img
            src={user?.image || "/assets/user.png"}
            alt={user?.displayName}
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
});

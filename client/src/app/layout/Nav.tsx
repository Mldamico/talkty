import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="fixed top-0 w-full text-white nav">
      <div className="flex items-center max-w-2xl gap-6 p-3 m-auto lg:max-w-4xl xl:max-w-6xl">
        <header>
          <NavLink to="/" className="flex items-center gap-3">
            <img className="w-8" src="/assets/logo.png" alt="Logo" />
            <h3>Talkty</h3>
          </NavLink>
        </header>
        <div className="">
          <NavLink to="/activities">Activities</NavLink>
        </div>
        <NavLink to="/createactivity">
          <button className="p-2 bg-green-600 rounded-md">
            Create Activity
          </button>
        </NavLink>
      </div>
    </div>
  );
};

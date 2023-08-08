import { Nav } from "./Nav";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <Nav />
          <div className="max-w-2xl mx-auto mt-24 lg:max-w-4xl xl:max-w-6xl">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export default observer(App);

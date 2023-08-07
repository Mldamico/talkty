import { Nav } from "./Nav";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="max-w-2xl mx-auto mt-24 lg:max-w-4xl xl:max-w-6xl">
        <Outlet />
      </div>
    </>
  );
}

export default observer(App);

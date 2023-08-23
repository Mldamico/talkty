import { Nav } from "./Nav";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { ToastContainer } from "react-toastify";
import { useStore } from "../stores/store";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { ModalContainer } from "../common/modals/ModalContainer";

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) return <Loading content="Loading app..." />;

  return (
    <>
      <ModalContainer />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
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

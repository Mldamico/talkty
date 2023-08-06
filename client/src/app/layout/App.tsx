import { useEffect } from "react";
import { Nav } from "./Nav";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import { Loading } from "./Loading";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loading content="Loading..." />;

  return (
    <>
      <Nav />
      <div className="max-w-2xl mx-auto mt-24 lg:max-w-4xl xl:max-w-6xl">
        <ActivityDashboard />
      </div>
    </>
  );
}

export default observer(App);

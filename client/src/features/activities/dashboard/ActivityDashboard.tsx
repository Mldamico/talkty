import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { ActivityList } from "./ActivityList";
import { useEffect } from "react";
import { Loading } from "../../../app/layout/Loading";

export const ActivityDashboard = observer(() => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial) return <Loading content="Loading..." />;

  return (
    <div className="grid gap-4 grid-cols-[1.2fr_0.6fr]">
      <div className="">
        <ActivityList />
      </div>
      <div className="">
        <h2>Activity filters</h2>
      </div>
    </div>
  );
});

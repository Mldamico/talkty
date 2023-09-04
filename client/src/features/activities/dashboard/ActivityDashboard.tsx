import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { ActivityList } from "./ActivityList";
import { useEffect, useState } from "react";
import { Loading } from "../../../app/layout/Loading";
import { ActivityFilters } from "./ActivityFilters";
import { PagingParams } from "../../../types/pagination";

export const ActivityDashboard = observer(() => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry, setPagingParams, pagination } =
    activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  const handleGetNext = () => {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadActivities().then(() => setLoadingNext(false));
  };

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial && !loadingNext)
    return <Loading content="Loading activities..." />;

  return (
    <div className="grid gap-4 grid-cols-[1.2fr_0.6fr]">
      <div className="">
        <ActivityList />
        <button
          onClick={handleGetNext}
          disabled={
            loadingNext || pagination?.totalPages === pagination?.currentPage
          }
        >
          More
        </button>
      </div>
      <div className="">
        <ActivityFilters />
      </div>
    </div>
  );
});

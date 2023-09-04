import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { ActivityList } from "./ActivityList";
import { useEffect, useState } from "react";
import { Loading } from "../../../app/layout/Loading";
import { ActivityFilters } from "./ActivityFilters";
import { PagingParams } from "../../../types/pagination";
import InfiniteScroll from "react-infinite-scroller";

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
        <InfiniteScroll
          pageStart={0}
          loadMore={handleGetNext}
          hasMore={
            !loadingNext &&
            !!pagination &&
            pagination.currentPage < pagination.totalPages
          }
          initialLoad={false}
        >
          <ActivityList />
        </InfiniteScroll>
      </div>
      <div className="">
        <ActivityFilters />
      </div>
      <div className=""></div>
    </div>
  );
});

import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { ActivityList } from "./ActivityList";
import { useEffect, useState } from "react";
import { ActivityFilters } from "./ActivityFilters";
import { PagingParams } from "../../../types/pagination";
import InfiniteScroll from "react-infinite-scroller";
import { ActivityListItemPlaceholder } from "./ActivityListItemPlaceholder";

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

  return (
    <div className="grid gap-4 grid-cols-[1.2fr_0.6fr]">
      {activityStore.loadingInitial &&
      activityRegistry.size === 0 &&
      !loadingNext ? (
        <>
          <ActivityListItemPlaceholder />
          <ActivityListItemPlaceholder />
        </>
      ) : (
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
      )}

      <div className="">
        <ActivityFilters />
      </div>
      <div className=""></div>
    </div>
  );
});

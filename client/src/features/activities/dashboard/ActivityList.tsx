import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { ActivityListItem } from "./ActivityListItem";
import { Fragment } from "react";

export const ActivityList = observer(() => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <header className="py-4 text-xl font-bold">{group}</header>
          <div className="p-4 bg-white">
            <div className="">
              {activities.map((activity) => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
});

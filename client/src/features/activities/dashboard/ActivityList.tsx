import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { SyntheticEvent, useState } from "react";

export const ActivityList = observer(() => {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;

  const [target, setTarget] = useState("");
  const handleActivityDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <div className="p-4 bg-white">
      <div className="">
        {activitiesByDate.map((activity) => (
          <div key={activity.id}>
            <div className="flex flex-col gap-2 py-2 pb-4 border-b-2 border-gray-300">
              <h3 className="text-xl font-bold">{activity.title}</h3>
              <p className="text-gray-500">{activity.date}</p>
              <p>{activity.description}</p>
              <p>
                {activity.city}, {activity.venue}
              </p>
              <div className="flex justify-between px-4">
                <div className="p-1 border border-gray-300">
                  {activity.category}
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-white bg-red-500 rounded-sm"
                    disabled={loading && target === activity.id}
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-3 py-1 text-white bg-blue-500 rounded-sm"
                    onClick={() => activityStore.selectActivity(activity.id)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
